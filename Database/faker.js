const MAX_NUMBER_OF_SHOES = 200;

const connection = require('./index');
const faker = require('faker');


// const mysql_faker = require('mysql-faker');

//function to generate a random number 0 or 1 corresponding to 'no' or 'yes'
const randomInStockGenerator = () => {
  let array = [];
  
  for (let i = 0; i < MAX_NUMBER_OF_SHOES ; i++) {
    const number = faker.random.number({ min: 0, max: 1 });
    array.push('(' + number + ')');
  }
  return array.join();
};
// console.log(randomInStockGenerator());

const inStockOption = () => {  
  connection.query('INSERT INTO inStockOptions (inStock) VALUES' + randomInStockGenerator());
};

inStockOption();

module.exports = {
  inStockOption
};



