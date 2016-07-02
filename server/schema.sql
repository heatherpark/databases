DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE `messages` (
  /* Describe your table here.*/
  `objectId` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `username` VARCHAR(140),
  `message` VARCHAR(160),
  `roomname` VARCHAR(160)
);


CREATE TABLE users (
  username VARCHAR(30) DEFAULT 'anonymous',
  user_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

/* Create other tables and define schemas for them here! */
-- INSERT INTO `messages` (username, message, roomname) VALUES ('aj', 'hello there', 'lobby'),
-- ('aj', 'hello again', 'lobby'),
-- ('aj', 'hello there', 'mySQL');

/* Extra Credit
 * Create a separate users table
 *

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
