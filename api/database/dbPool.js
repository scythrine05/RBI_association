const mysql = require("mysql");
const util = require("util");
const fs = require("fs");
const path = require("path");

const dbPool = mysql.createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  ssl: {
    ca: fs.readFileSync(path.join(__dirname, "ca-certificate.crt")),
    rejectUnauthorized: true,
  },
  connectionLimit: 100,
});

dbPool.query = util.promisify(dbPool.query);

module.exports = dbPool;
