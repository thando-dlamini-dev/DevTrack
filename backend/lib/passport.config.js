import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import jwt from 'jsonwebtoken';
import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';

export const initializePassPort = () => {
    console.log("Github Client ID:", process.env.GITHUB_CLIENT_ID)
    passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL,
        scope: ['user'],
        userProfileURL: 'https://api.github.com/user'
    }, (accessToken, refreshToken, profile, done) => {
        
        const userProfile = {
            id: profile.id,
            username: profile.username,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            profilePicture: profile.photos[0].value,
            accessToken: accessToken,
        }

        return done(null, userProfile)
    }))


    // JWT Strategy for protected routes
    const jwtOptions = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    };

    passport.use(new JwtStrategy(jwtOptions, (jwtPayload, done) => {
        // Simply return the payload since we're not verifying against a database
        return done(null, jwtPayload);
    }));

    // Serialization (minimal implementation)
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
};

export const generateToken = (user) => {
  console.log("Generating token for user:", user);
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      displayName: user.displayName,
      email: user.email,
      avatar: user.avatar,
      accessToken: user.accessToken
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};