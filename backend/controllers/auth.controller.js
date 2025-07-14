import passport from "passport";
import { generateToken } from "../lib/passport.config.js";
import { findOrCreateUser } from "../models/user.model.js";
import getUseContributions from "../lib/octokit.config.js"
import { cacheResult, fetchCachedResult } from "../lib/redis.config.js";

// GitHub OAuth authentication
export const githubAuth = passport.authenticate("github", {
  session: false,
  forceReAuthenticate: true
});

// Handle GitHub callback
export const githubCallback = async (req, res) => {
  try {
    if (!req.user?.id) {
      throw new Error('Invalid user data from GitHub');
    }

    const normalizedUser = {
      id: req.user.id,
      username: req.user.username || req.user.id,
      displayName: req.user.displayName || req.user.username || 'GitHub User',
      email: req.user.email?.[0]?.value || null,
      avatar: req.user.profilePicture || req.user.photos?.[0]?.value || null,
      accessToken: req.user.accessToken
    };

    const dbUser = await findOrCreateUser(normalizedUser);

    const tokenUser = {
      id: dbUser.id,
      username: dbUser.username || normalizedUser.username,
      displayName: dbUser.display_name || normalizedUser.displayName,
      email: dbUser.email || normalizedUser.email,
      avatar: dbUser.avatar_url || normalizedUser.avatar,
      accessToken: normalizedUser.accessToken
    };

    const token = generateToken(tokenUser);
    
    const userData = {
      token,
      user: {
        id: tokenUser.id,
        username: tokenUser.username,
        displayName: tokenUser.displayName,
        email: tokenUser.email,
        avatar: tokenUser.avatar,
        githubToken: normalizedUser.accessToken
      }
    };
    
    const redirectUrl = `${process.env.CLIENT_URL}/login/success?data=${encodeURIComponent(JSON.stringify(userData))}`;
    res.redirect(redirectUrl);
  } catch (error) {
    console.error('Error in GitHub callback:', error);
    res.redirect(`${process.env.CLIENT_URL}/login?error=auth_failed&message=${encodeURIComponent(error.message)}`);
  }
};

// Get current authenticated user
export const getCurrentUser = (req, res) => {
  res.json({
    success: true,
    user: {
      id: req.user.id,
      username: req.user.username,
      displayName: req.user.displayName,
      avatar: req.user.avatar
    }
  });
};

// Refresh JWT token
export const refreshToken = (req, res) => {
  const newToken = generateToken(req.user);
  res.json({ token: newToken });
};

// Handle user logout
export const logoutUser = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Logout successful'
  });
};

export const fetchUserContributions = async (req, res) => {
  const { username } = req.user;
  console.log("Fetching contribution data for user: ", username)
  try {
    if(!username){
      throw new Error("Login is required");
    }

    const contributions = await getUseContributions(username);

    console.log(`Fetched contribution data: ${contributions}`)

    return res.status(200).json({
      success: true,
      contributions,
      message: "User contributions fetched successfully."
    })

  } catch (error) {
    console.log("Error in fetchUserContributions controller: ", error);
    return res.status(500).json({message: "Could't fetch user contributions", error})
  }

}

await cacheResult("name", "Nkosiyothando");