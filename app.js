const mysql = require("mysql");
const inquirer = require("inquirer");
// const table = require("console.table");
const add = require("./lib/add");
const update = require("./lib/update");
const view = require("./lib/view");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Kenndall2017!",
    database: "employee_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId + "\n");
    exports.start();
});

exports.start = () => {
    inquirer.prompt([
        {
            type:"list",
            messages: "What would you like to do?",
            name: "choice",
            choices: [
                "View all Employees",
                "Add Employee",
                "Update Employee Role",
                "EXIT",

            ]
        }
    ]).then(function(anwer){
        if(anwer.choice === "View all Employees") {
            view.viewAllEmployees();
        }
        else if(answer.choice === "Add Employee") {
            add.addEmployee();
        }
        else if (anwer.choice ==="Update Employee Role") {
            update.updateRole();
        }
        else if (answer.choice === "EXIT") {
            connection.end();
            return
        }
    });
};




