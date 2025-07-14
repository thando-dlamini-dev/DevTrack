import myslq from "mysql2/promise.js";

export const pool = myslq.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export const initDatabase = async () => {
    try {
        const connection = await pool.getConnection();

        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);

        await connection.query(`USE ${process.env.DB_NAME}`);

        //Create users table if it doesn't exist
        await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                id VARCHAR(100) PRIMARY KEY NOT NULL,
                username VARCHAR(100) NOT NULL,
                display_name VARCHAR(100),
                email VARCHAR(100),
                avatar_url TEXT,
                github_access_token TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

            )`);
        //Create project ideas table if it doesn't exist
        await connection.query(`
            CREATE TABLE IF NOT EXISTS project_ideas (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id VARCHAR(100) NOT NULL,
            project_name VARCHAR(250) NOT NULL,
            summary TEXT,
            description TEXT,
            tech_stack JSON,
            main_language VARCHAR(100),
            estimated_deadline VARCHAR(100),
            difficulty VARCHAR(50),
            why_this_project TEXT,
            required_features JSON,
            learning_resources JSON,
            deployment_options JSON,
            potential_challenges JSON,
            next_steps JSON,
            user_selections JSON,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `);


        connection.release();
        console.log("Database initialized successfully");
    } catch (error) {
        console.error("Error initializing database:", error);
        throw error;
    }
}

export const query = async (sql, params) => {
    try {
        const [rows] = await pool.execute(sql, params);
        return rows;
    } catch (error) {
        console.error("Database query error:", error);
        throw error;
    }
}

