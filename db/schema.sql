DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;
CREATE TABLE department (
Dept_id INT NOT NULL AUTO_INCREMENT,
Dept_name VARCHAR(30),
PRIMARY KEY (Dept_id)
);

CREATE TABLE company_role (
Role_id INT NOT NULL AUTO_INCREMENT,
title VARCHAR (30) NOT NULL,
salary DEC(7,2) NOT NULL,
Dept_id INT,
PRIMARY KEY (Role_id),
FOREIGN KEY (Dept_id) REFERENCES department(Dept_id)
);

CREATE TABLE employees (
Emp_id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
Emp_Role_id INT NOT NULL,
Manager_id INT,
PRIMARY KEY (Emp_id),
FOREIGN KEY (Emp_Role_id) REFERENCES company_role(Role_id),
FOREIGN KEY (Manager_id) REFERENCES employees(Emp_id)
);