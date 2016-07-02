DROP DATABASE IF EXISTS chatter;
CREATE DATABASE chatter;

USE chatter;

CREATE TABLE `messages` (
  /* Describe your table here.*/
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(140),
  `message` VARCHAR(160),
  `roomname` VARCHAR(160)
);

CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(30)
);


/* Create other tables and define schemas for them here! */
INSERT INTO `messages` (username, message, roomname) VALUES ('aj', 'hello there', 'lobby'),
('aj', 'hello again', 'lobby'),
('aj', 'hello there', 'mySQL');

/* Extra Credit
 * Create a separate users table
 *

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
