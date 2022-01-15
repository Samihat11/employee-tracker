const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees_db"
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;