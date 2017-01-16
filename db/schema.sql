CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date timestamp NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id)
);