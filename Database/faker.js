const MAX_NUMBER_OF_SHOES = 25;
const MAX_NUMBER_OF_SHOES_WITH_COLOR = 100;

const faker = require('faker');
const connection = require('./index');


// const mysql_faker = require('mysql-faker');

// helper function to generate a random number 0 or 1 corresponding to 'no' or 'yes'
const randomInStockGenerator = () => {
  const array = [];
  for (let i = 0; i < MAX_NUMBER_OF_SHOES_WITH_COLOR; i++) {
    const number = faker.random.number({ min: 0, max: 1 });
    array.push(`(${number})`);
  }
  return array.join();
};
// console.log(randomInStockGenerator());

// function to populate the inStockOptions table with random values for the field inStockOption
const inStockOption = () => {
  connection.query(`INSERT INTO inStockOptions (inStock) VALUES ${randomInStockGenerator()}`, (error) => {
    if (error) { throw error; }
    console.log('random values of 0 or 1 have been added to the inStock field');
  });
};

inStockOption();





// helper function to generate field values to populate the image table
const imageTableFieldValuesGenerator = () => {
  const mainArray = [];
  for (let i = 1; i <= MAX_NUMBER_OF_SHOES_WITH_COLOR; i++) {
    mainArray.push(`('https://s3-us-west-1.amazonaws.com/fecmainfeed/Main_feed_ims/${i}).jpeg', ${faker.random.number({ min: 1, max: 25 })}, ${faker.random.number({ min: 1, max: 7 })})`);
  }
  return mainArray.join();
};

//main function to populate the images table with imagesUrls, shoeId's and colorid's

const imageTable = () => {
  connection.query(`INSERT INTO images (imageURL, shoeId, colorId) VALUES ${imageTableFieldValuesGenerator ()}`, (error) => {
    if (error) { throw error; }
    console.log('image table has been seeded');
  });
};

imageTable();


module.exports = {
  inStockOption,
  imageTable,
  
};

connection.end();
