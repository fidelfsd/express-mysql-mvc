const mysql = require("mysql2");

const conn = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root",
   password: "root",
   database: "GeeksHubs",
});

module.exports = conn;
