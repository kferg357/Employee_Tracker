const mysql = require("mysql");
const app = ("../app");

const conncection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Kenndall2017!",
    database: "employee_db"
});

exports.viewAllEmployees = () => {
    var queryString = "SELECT E.emp_id, E.first_name, E.last_name, title, salary, dept_name, " +
    "E2.first_name AS manager_first_name, E2.last_name AS manger_last_name " +
    "FROM employees AS E" +
    "INNER JOIN company_role AS C ON E.emp_role_id = C.role_id" +
    "INNER JOIN department AS D ON C.dept_id = D.dpet_id" +
    "LEFT JOIN employees AS E2 ON E.manager_id = E2.epm_id;";

    conncection.query(queryString, function(err,res) {
        if (err) {throw err}
        console.table(res)

        app.start();
    });
 }

 exports.getAllRoles = (cb) => {
     conncection.query("SELECT * FROM company_role", function(err,results) {
         if(err) throw err;
         cb(results);
     });
 }
 exports.getAllDepartments = (cb) => {
     conncection.query("SELECT * FROM department", function(err,results) {
         if(err) throw err;
         cb(results);
     });
 }
 exports.getAllEmployees = (cb) => {
     conncection.query("SELECT * FROM employees", function(err,results) {
         if(err) throw err;
         cb(results);
     });
 }