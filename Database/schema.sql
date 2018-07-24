DROP DATABASE IF EXISTS MAIN_FEED;
CREATE DATABASE MAIN_FEED;
USE MAIN_FEED;

-- This table stores the category of the shoe ex: Air Jordan;
DROP TABLE IF EXISTS shoes; 
CREATE TABLE shoes (
  id INT NOT NULL AUTO_INCREMENT,
  shoe VARCHAR(800) NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE shoes ADD price INT;


-- Table colors stores the different colors possible
DROP TABLE IF EXISTS colors;
CREATE TABLE colors(
 id INT NOT NULL AUTO_INCREMENT,
 color VARCHAR(20) NOT NULL, 
 PRIMARY KEY(id)
);

-- Table 'sizes': This table stores the different shoe sizes possible.
DROP TABLE IF EXISTS sizes;                                	
CREATE TABLE sizes(
  id INT NOT NULL AUTO_INCREMENT,
  MensSize VARCHAR(20) NOT NULL,
  WomensSize VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)  
);

-- Table images: This table stores the different images pertaining to a particular shoe
DROP TABLE IF EXISTS images;
CREATE TABLE images(
  id INT NOT NULL AUTO_INCREMENT,
  imageURL VARCHAR(8000),
  shoeId INT,
  colorId INT,
  PRIMARY KEY(id),
  FOREIGN KEY (shoeId) REFERENCES shoes(id) ON DELETE CASCADE,
  FOREIGN KEY (colorId) REFERENCES colors(id) ON DELETE CASCADE
);



-- Table 'inStockOptions': This table determines if a shoe in a given color and size is available
DROP TABLE IF EXISTS inStockOptions;                                	
CREATE TABLE inStockOptions (
  id INT NOT NULL AUTO_INCREMENT,  
  shoeId INT,
  colorId INT,
  sizeId INT,  
  inStock CHAR(100) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (shoeId) REFERENCES shoes(id) ON DELETE CASCADE,
  FOREIGN KEY (colorId) REFERENCES colors(id) ON DELETE CASCADE,
  FOREIGN KEY (sizeId) REFERENCES sizes(id) ON DELETE CASCADE  
);

-- populate the categories table with the different categories
INSERT INTO shoes (shoe, price) VALUES ("HaweJordan 1 Retro High OG", 190);
INSERT INTO shoes (shoe, price) VALUES ("JHike Air Force 270", 150);
INSERT INTO shoes (shoe, price) VALUES ("HTr Jordan 3 Retro", 170);
INSERT INTO shoes (shoe, price) VALUES ("Hikee Epic React Flyknit BETRUE", 135);
INSERT INTO shoes (shoe, price) VALUES ("Nike Air Max 90 Premium SE", 165);
INSERT INTO shoes (shoe, price) VALUES ("Hikem Benassi", 197);
INSERT INTO shoes (shoe, price) VALUES ("Hiket Air Zoom Pegasus 35 FlyEase", 90);
INSERT INTO shoes (shoe, price) VALUES ("Hifr Air Max 97 Premium", 110);
INSERT INTO shoes (shoe, price) VALUES ("yut CHUCK TAYLOR ALL STAR LOW TOP", 55);
INSERT INTO shoes (shoe, price) VALUES ("YTUFlight Club 91", 156);
INSERT INTO shoes (shoe, price) VALUES ("HYUrie 4", 145);
INSERT INTO shoes (shoe, price) VALUES ("Higy Air VaporMax Flyknit 2", 125);
INSERT INTO shoes (shoe, price) VALUES ("JUIe Air Huarache", 167);
INSERT INTO shoes (shoe, price) VALUES ("Hyte Air Zoom Terra Kiger 4", 165);
INSERT INTO shoes (shoe, price) VALUES ("KIike Air Max Sequent 3", 134);
INSERT INTO shoes (shoe, price) VALUES ("UYONVERSE CHUCK TAYLOR MONOCHROME LOW TOP", 341);
INSERT INTO shoes (shoe, price) VALUES ("Hike12 Air Huarache Drift", 234);
INSERT INTO shoes (shoe, price) VALUES ("Hik23e Roshe One", 125);
INSERT INTO shoes (shoe, price) VALUES ("Hikesd Air Max 1 Premium Retro", 76);
INSERT INTO shoes (shoe, price) VALUES ("Hike Air Max 97 Premium", 99);
INSERT INTO shoes (shoe, price) VALUES ("Airiyt Jordan 1 Retro High OG", 122);
INSERT INTO shoes (shoe, price) VALUES ("Hikeyut Air Max 270", 154);
INSERT INTO shoes (shoe, price) VALUES ("Hik8uyEpic React Flyknit", 231);
INSERT INTO shoes (shoe, price) VALUES ("Hike MYUEXP-X14SE", 222);
INSERT INTO shoes (shoe, price) VALUES ("HikeYU100 EXP-X14", 100);

-- populate the table sizes with fake data
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M7', 'W8.5');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M7.5', 'W9');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M8', 'W9.5');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M8.5', 'W10');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M9', 'W10.5');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M9.5', 'W11');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M10', 'W11.5');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M10.5', 'W12');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M11', 'W12.5');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M11.5', 'W13');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M12', 'W13.5');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M12.5', 'W14');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M13', 'W14.5');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M14', 'W15.5');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M15', 'W16.5.5');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M16', 'W17.5');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M17', 'W18.5');
INSERT INTO sizes (MensSize, WomensSize) VALUES ('M18', 'W19.5');

-- populate the colors table with fake data
INSERT INTO colors (color) VALUES ('black');
INSERT INTO colors (color) VALUES ('white');
INSERT INTO colors (color) VALUES ('blue');
INSERT INTO colors (color) VALUES ('green');
INSERT INTO colors (color) VALUES ('pink');
INSERT INTO colors (color) VALUES ('orange');
INSERT INTO colors (color) VALUES ('yellow');



