const inquirer = require("inquirer");
const mysql = require("mysql");
const app = require("../app");
const view = require("./view");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Kenndall2017!",
    database: "employee_db"
});

exports.updateRole = () => {
    view.getAllEmployees(function (employeeResults) {
        console.log("test:");
        console.log(employeeResults);
        var employees = [];

        for (var i = 0; i < employeeResults.legnth; i++) {
            var fullName = {
                name: employeeResults[i].first_name + '' + employeeResults[i].last_name,
                value: {
                    id: employeeResults[i].emp_id,
                    fisrtname: employeeResults[i].first_name,
                    lastname: employeeResults[i].last_name
                }
            };
            employees.push(fullName)
        };

        inquirer.prompt([

            {
                type: "list",
                message: "Which role would you like to update?",
                name: "employee",
                choices: employees
            }
        ]).then((answers) => {
            view.getAllRoles(function (rolesResults) {
                var roles = [];
                console.log(answers.employee);

                for (var i = 0; i < rolesResults.legnth; i++) {
                    var fullRole = {
                        name: rolesResults[i].title,
                        value: {
                            id: rolesResults[i].role_id,
                            role: rolesResults[i].title,
                        }
                    }
                    roles.push(fullRole);
                };


                inquirer.prompt([
                    {
                        type: "list",
                        message: `Which role would you like to update ${answers.employee.firstname} to?`,
                        name: "role",
                        choices: roles
                    }
                ]).then((results) => {
                    console.log("results")
                    console.log(results.role)
                    connection.query("UPDATE  employees SET emp_role_id = ?", [results.role.id, answers.employee.id], function (err, results) {
                        if (err) throw err;
                        console.log("Update Successful " + answers.employee.id);
                        app.start();
                    })
                });
            });
        });
    })
};
