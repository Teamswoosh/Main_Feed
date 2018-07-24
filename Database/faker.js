const MAX_NUMBER_OF_SHOES = 100;

const faker = require('faker');
const connection = require('./index');


// const mysql_faker = require('mysql-faker');

// helper function to generate a random number 0 or 1 corresponding to 'no' or 'yes'
const randomInStockGenerator = () => {
  const array = [];

  for (let i = 0; i < MAX_NUMBER_OF_SHOES; i++) {
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


// helper function to generate urls
const urlGenerator = () => {
  const array = [];
  for (let i = 1; i <= MAX_NUMBER_OF_SHOES; i++) {
    array.push(`('https://s3-us-west-1.amazonaws.com/fecmainfeed/Main_feed_ims/${i}).jpeg')`);
  }
  return array.join();
};

const imageURL = () => {
  connection.query(`INSERT INTO images (imageURL) VALUES ${urlGenerator()}`, (error) => {
    if (error) { throw error; }
    console.log('imageURLs have been added to the imageURL field');
  });
};

imageURL();


// helper function to


module.exports = {
  inStockOption,
  imageURL,
};

connection.end();
