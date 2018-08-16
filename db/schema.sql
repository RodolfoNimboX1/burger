-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS jzhb3j0xmls4q7gj;

CREATE DATABASE jzhb3j0xmls4q7gj;

USE jzhb3j0xmls4q7gj;

CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(250) NOT NULL,
devoured BOOLEAN default false,
PRIMARY KEY (id)
);

SELECT* FROM burgers