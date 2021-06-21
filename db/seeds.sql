INSERT INTO  department (dept_name) VALUES ('Back of House'), ('Front of House'), ('Management');
INSERT INTO  compamy_role (title, salary, dept_id) VALUES
('General Manager', 80000.00, 3),
('Head Chef', 60000.00, 1),
('Sous CHef', 30000.00, 1),
('COok', 30000.00, 1),
('Dishwasher', 20000.00, 01),
('Front of House Manager', 40000.00, 2),
('Host', 30000.00, 2),
('Server', 20000.00, 1);

INSERT INTO employees (fisrt_name, last_name, emp_role_id, manager_id) VALUES
('Alvin', 'Steve', 1, null),
('Jones', 'Brandon', 6, 1),
('Hatih', 'Roland', 2, null);