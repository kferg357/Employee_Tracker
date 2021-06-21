const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");
const add = require("./lib/add");
const update = require("./lib/update");
const view = require("./lib/view");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3030,
    user: "root",
    password: "password"
    database: "employee_db"
});

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id" + connection.threadId + "\n");
//     exports.start();
// });
