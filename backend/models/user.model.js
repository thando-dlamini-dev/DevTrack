import { query } from "../lib/db.config.js";

export const findOrCreateUser = async (profile) => {
  try {
    // Ensure all required fields with proper fallbacks
    const safeProfile = {
      id: profile.id,
      username: profile.username || `user-${profile.id.substring(0, 8)}`, // Guaranteed username
      displayName: profile.displayName || profile.username || `GitHub User ${profile.id.substring(0, 4)}`,
      email: profile.email || profile.emails?.[0]?.value || null,
      avatar: profile.profilePicture || profile.photos?.[0]?.value || null,
      accessToken: profile.accessToken
    };

    // Check if user exists
    const existingUser = await query(`SELECT * FROM users WHERE id = ?`, [safeProfile.id]);

    if (existingUser.length > 0) {
      // Build dynamic update query
      const updates = [];
      const values = [];
      
      // Only update fields that have values and are different
      if (safeProfile.username !== undefined && safeProfile.username !== existingUser[0].username) {
        updates.push('username = ?');
        values.push(safeProfile.username);
      }
      if (safeProfile.displayName !== undefined && safeProfile.displayName !== existingUser[0].display_name) {
        updates.push('display_name = ?');
        values.push(safeProfile.displayName);
      }
      if (safeProfile.email !== undefined && safeProfile.email !== existingUser[0].email) {
        updates.push('email = ?');
        values.push(safeProfile.email);
      }
      if (safeProfile.avatar !== undefined && safeProfile.avatar !== existingUser[0].avatar_url) {
        updates.push('avatar_url = ?');
        values.push(safeProfile.avatar);
      }
      if (safeProfile.accessToken !== undefined && safeProfile.accessToken !== existingUser[0].github_access_token) {
        updates.push('github_access_token = ?');
        values.push(safeProfile.accessToken);
      }
      
      // Only execute update if there are changes
      if (updates.length > 0) {
        values.push(safeProfile.id);
        await query(
          `UPDATE users SET ${updates.join(', ')} WHERE id = ?`,
          values
        );
      }
      
      return {
        ...existingUser[0],
        username: existingUser[0].username || safeProfile.username,
        display_name: existingUser[0].display_name || safeProfile.displayName,
        email: existingUser[0].email || safeProfile.email,
        avatar_url: existingUser[0].avatar_url || safeProfile.avatar
      };
    } else {
      // Create new user with guaranteed values
      await query(
        `INSERT INTO users (
          id,
          username,
          display_name,
          email,
          avatar_url,
          github_access_token
        ) VALUES (?, ?, ?, ?, ?, ?)`,
        [
          safeProfile.id,
          safeProfile.username,
          safeProfile.displayName,
          safeProfile.email,
          safeProfile.avatar,
          safeProfile.accessToken
        ]
      );

      const [newUser] = await query(`SELECT * FROM users WHERE id = ?`, [safeProfile.id]);
      return newUser;
    }
  } catch (error) {
    console.error("Error in findOrCreateUser:", error);
    throw error;
  }
};

export const getUserById = async (userId) => {
    try {
        const users = await query(`SELECT * FROM users WHERE id = ?`, [userId]);
        return users.length > 0 ? users[0] : null;
    } catch (error) {
        console.error("Error while getting user by ID:", error);
        throw error;
    }
}