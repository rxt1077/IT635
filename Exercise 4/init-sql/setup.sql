CREATE DATABASE sis;
USE sis;
CREATE TABLE student_info (
    id INTEGER,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    PRIMARY KEY (id)
);
CREATE TABLE student_contacts (
    id INTEGER,
    name VARCHAR(255),
    phone VARCHAR(10),
    PRIMARY KEY (id)
);
CREATE TABLE student_attendance (
    object_id INTEGER NOT NULL AUTO_INCREMENT,
    student_id INT,
    code CHAR,
    credit FLOAT,
    PRIMARY KEY (object_id)
);

INSERT INTO student_info (id, first_name, last_name) 
VALUES
    (0, "Abe", "Johnson"),
    (1, "Om", "Patel"),
    (2, "Kie", "Nguyen"),
    (3, "Curtis", "Mayfield"),
    (4, "Emily", "Gao");

INSERT INTO student_contacts (id, name, phone) 
VALUES
    (0, "Frank Johnson", "7235555555"),
    (2, "Parik Nguyen", "6095555555"),
    (3, "Olga Preel", "2125555555");

ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'it635';
CREATE USER 'steve'@'%' IDENTIFIED BY 'it635';
GRANT SELECT ON sis.student_contacts TO 'steve'@'%';
GRANT INSERT ON sis.student_attendance TO 'steve'@'%';
FLUSH PRIVILEGES;
