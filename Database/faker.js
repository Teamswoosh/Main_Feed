const faker = require('faker');
const connection = require('./index');

// const mysql_faker = require('mysql-faker');


const size = function(cb) {
  const query = INSERT INTO 
}

//function to generate a random size 4-13
const randomSize = faker.random.number({
  min: 4,
  max: 13
});
console.log(randomSize);

//function to generate a random number 0 or 1 corresponding to 'no' or 'yes'
const randomInStock = faker.random.number({ min: 0, max: 1 });
console.log(randomInStock);


//function to generate a random color from a given array of colors
const randomColor = (array) => {
  let index = Math.floor(Math.random() * array.length);
  console.log(index)
  return array[index];
};
var array = ['blue', 'black', 'pink', 'white', 'orange'];
console.log(randomColor(array));





