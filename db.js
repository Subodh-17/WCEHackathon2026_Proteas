// backend/src/utils/db.js
const { Pool } = require("pg");

const pool = new Pool({
  host:     process.env.DB_HOST     || "localhost",
  port:     process.env.DB_PORT     || 5432,
  database: process.env.DB_NAME     || "blue_carbon_mrv",
  user:     process.env.DB_USER     || "postgres",
  password: process.env.DB_PASSWORD || "password",
});

pool.on("connect", () => console.log("✅ PostgreSQL connected"));
pool.on("error",   (err) => console.error("❌ PostgreSQL error:", err));

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
