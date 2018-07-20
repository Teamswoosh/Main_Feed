DROP DATABASE IF EXISTS MAIN_FEED;
CREATE DATABASE MAIN_FEED;
USE MAIN_FEED;

-- This table stores the category of the shoe ex: Air Jordan;
DROP TABLE IF EXISTS shoes; 
CREATE TABLE shoes (
  id INT NOT NULL AUTO_INCREMENT,
  shoe VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE shoes ADD price INT;

-- Table colors stores the different colors possible
DROP TABLE IF EXISTS colors;
CREATE TABLE colors(
 id INT NOT NULL AUTO_INCREMENT,
 color VARCHAR(20) NOT NULL,
 id_shoe INT,
 PRIMARY KEY(id),
 FOREIGN KEY(id_shoe) REFERENCES shoes(id) ON DELETE CASCADE
 
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
DROP TABLE IF EXISTS details;
CREATE TABLE details(
  id INT NOT NULL AUTO_INCREMENT,
  inStock TINYINT NOT NULL,
  imageURL VARCHAR(8000),
  id_shoe INT,
  id_color INT,
  PRIMARY KEY(id),
  FOREIGN KEY (id_shoe) REFERENCES shoes(id) ON DELETE CASCADE,
  FOREIGN KEY (id_color) REFERENCES colors(id) ON DELETE CASCADE
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

-- INSERT INTO colors(color) VALUES(randomColor);



