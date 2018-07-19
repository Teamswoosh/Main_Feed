
DROP DATABASE IF EXISTS MAIN_FEED;
CREATE DATABASE MAIN_FEED;
USE MAIN_FEED;

-- This table stores the category of the shoe ex: Air Jordan;
DROP TABLE IF EXISTS categories; 
CREATE TABLE categories (
  id INT NOT NULL AUTO_INCREMENT,
  category VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

-- Table colors stores the different colors possible
DROP TABLE IF EXISTS colors;
CREATE TABLE colors(
 id INT NOT NULL AUTO_INCREMENT,
 color VARCHAR(20) NOT NULL,
 id_category INT,
 PRIMARY KEY(id),
 FOREIGN KEY(id_Category) REFERENCES categories(id) ON DELETE CASCADE
 
);


-- Table 'sizes': This table stores the different shoe sizes possible.
DROP TABLE IF EXISTS sizes;                                	
CREATE TABLE Sizes (
  id INT NOT NULL AUTO_INCREMENT,
  size INT NOT NULL,
  id_color INT,
  PRIMARY KEY (id),
  FOREIGN KEY (id_color) REFERENCES colors(id) ON DELETE CASCADE  
);

-- Table images: This table stores the different images pertaining to a particular shoe
DROP TABLE IF EXISTS images;
CREATE TABLE images(
  id INT NOT NULL AUTO_INCREMENT,
  inStock TINYINT NOT NULL,
  imageURL VARCHAR(8000),
  id_category INT,
  id_color INT,
  PRIMARY KEY(id),
  FOREIGN KEY (id_category) REFERENCES categories(id) ON DELETE CASCADE,
  FOREIGN KEY (id_color) REFERENCES colors(id) ON DELETE CASCADE
);