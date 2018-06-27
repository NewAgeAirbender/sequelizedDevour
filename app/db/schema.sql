### Schema

CREATE DATABASE devour_db;
USE devour_db;

CREATE TABLE books
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	done BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
