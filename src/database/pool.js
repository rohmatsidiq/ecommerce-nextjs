const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "dieza",
  password: "12345",
  database: "ecommerce",
});

module.exports = pool;
