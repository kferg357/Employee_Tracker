const inquirer = require("inquirer");
cosnt mysql = require("mysql");
const app = require("../app");
const view = require("./view");

const connection = mysqul.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Kenndall2017!",
    database: "employee_db"
});

exports.addEmployee = () => {
    view.getAllRoles(function (rolesResults) {
        var roles = [];
        for (var i = 0; i, < rolesResults.length; i++) {
            roles.push(rolesResults[i].title);
        }
        var options = [
            {
                type: "input",
                message: "Employee First Name",
                name: "firstname",
                default: "Henry"
            },
            {
                type: "input",
                message: "Employee Last Name",
                name: "lastname",
                default: "Simpson"
            },
            {
                type: "input",
                message: "Employee Role",
                name: "role",
                choices: roles
            }
        ];

        inquirer.prompt(options)
            .then((answers) => {
                var roleId = null;
                for (var i = 0; i < rolesResults.length; i++) {
                    if (rolesResults[i].title === answers.role) {
                        roleId = rolesResults[i].role_id
                    }
                }
                connection.query("INSERT INTO employee SET ?",
                    {
                        first_name: answers.firstName,
                        last_name: answers.lastName,
                        emp_role_id: roleId
                    },
                    function (err, results) {
                        if (err) throw err;
                        console.log("Successful" + answers.firstName + "" + answers.lastName);
                        app.start();
                    });
            });
    });
};
