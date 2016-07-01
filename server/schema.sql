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

/* Create other tables and define schemas for them here! */
/* Test to see if it's working */

INSERT INTO `messages` (username, message, roomname) VALUES ('aj', 'hello there', 'lobby');


/* If the database already exists, just drop it and create it again :) */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

