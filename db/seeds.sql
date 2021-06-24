INSERT INTO  department (Dept_name) VALUES ('Back of House'), ('Front of House'), ('Management');
INSERT INTO  company_role (title, salary, Dept_id) VALUES
('General Manager', 80000.00, 3),
('Head Chef', 60000.00, 1),
('Sous CHef', 30000.00, 1),
('Cook', 30000.00, 1),
('Dishwasher', 20000.00, 01),
('Front of House Manager', 40000.00, 2),
('Host', 30000.00, 2),
('Server', 20000.00, 1);

INSERT INTO employees (first_name, last_name, Emp_role_id, Manager_id) VALUES
('Alvin', 'Steve', 1, null),
('Jones', 'Brandon', 6, 1),
('Hatih', 'Roland', 2, null);