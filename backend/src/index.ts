require('dotenv').config({ path: '../../.env' });
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// function to test the database connection
const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log("Connected to MySQL successfully");
        connection.release();
    } catch (error) {
        console.error("Database connection failed:", error instanceof Error ? error.message : error);
        process.exit(1);
    }
};

testConnection();