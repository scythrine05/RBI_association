const mysql = require("mysql");
const util = require('util');

const dbPool = mysql.createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    connectionLimit: 15
});

dbPool.query = util.promisify(dbPool.query);

module.exports = dbPool;