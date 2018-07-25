const MAX_NUMBER_OF_SHOES = 7;
const MAX_NUMBER_OF_COLORS = 2;
const MAX_NUMBER_OF_SIZES = 18;
const MAX_NUMBER_OF_IMAGES_PER_COLOR = 8;
const MAX_NUMBER_OF_SHOES_WITH_COLOR = MAX_NUMBER_OF_SHOES * MAX_NUMBER_OF_COLORS * MAX_NUMBER_OF_IMAGES_PER_COLOR;

const faker = require('faker');
const connection = require('./index');


const mysql_faker = require('mysql-faker');


// helper function to populate the inStockOptions Table

const inStockOpttionsTableValuesGenerator = () => {
  const mainArray = [];
  for (let i = 1; i <= MAX_NUMBER_OF_SHOES; i++) {
    for (let j = 1; j <= MAX_NUMBER_OF_COLORS; j++) {
      for (let k = 1; k <= MAX_NUMBER_OF_SIZES; k++) {        
        mainArray.push(`(${i}, ${j}, ${k}, ${faker.random.number({ min: 0, max: 1 })})`);
      }
    }
  }
  return mainArray.join();
};

// function to populate the inStockOptions table with random values for 
const inStockOptionsTable = () => {
  connection.query(`INSERT INTO inStockOptions (shoeId, colorId, sizeId, inStock) VALUES ${inStockOpttionsTableValuesGenerator()}`, (error) => {
    if (error) { throw error; }
    console.log('random values of 0 or 1 have been added to the inStock field');
  });
};

inStockOptionsTable();



// helper function to generate field values to populate the image table
const imageTableFieldValuesGenerator = () => {
  const mainArray = [];
  for (let i = 1; i < MAX_NUMBER_OF_SHOES_WITH_COLOR; i++) {
    
    mainArray.push(`('https://s3-us-west-1.amazonaws.com/fecmainfeed/Main_feed_ims/${i}.jpeg', ${(i - 1) % MAX_NUMBER_OF_SHOES + 1}, ${(i - 1) % MAX_NUMBER_OF_COLORS + 1})`);
    
  }
  return mainArray.join();
};


// const imageTableFieldValuesGenerator = () => {
//   const mainArray = [];
//   for (let i = 1; i <= MAX_NUMBER_OF_SHOES_WITH_COLOR; i++) {
//     mainArray.push(`('https://s3-us-west-1.amazonaws.com/fecmainfeed/Main_feed_ims/${i}).jpeg', ${faker.random.number({ min: 1, max: 25 })}, ${faker.random.number({ min: 1, max: 7 })})`);
//   }
//   return mainArray.join();
// };

//main function to populate the images table with imagesUrls, shoeId's and colorid's

const imageTable = () => {
  connection.query(`INSERT INTO images (imageURL, shoeId, colorId) VALUES ${imageTableFieldValuesGenerator ()}`, (error) => {
    if (error) { throw error; }
    console.log('image table has been seeded');
  });
};

imageTable();


module.exports = {
  inStockOptionsTable,
  imageTable,
  
};

connection.end();
