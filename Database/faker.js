const faker = require('faker');

const mysql_faker = require('mysql-faker');

const randomSize = faker.random.number({
  min: 4,
  max: 13
});
console.log(randomSize);

const randomInStock= faker.random.number({min:0, max:1});
console.log(randomInStock);

//function to generate a random color from a given array of colors

const randomColor = (array) => {
  let index = Math.floor(Math.random() * array.length);
  console.log(index)
  return array[index];
};
var array = ['blue', 'black', 'pink', 'white', 'orange'];
console.log(randomColor(array));


// var users = (new mysql_faker.Table('users', 1000000));
// users.name_firstName('firstname')
//   .name_lastName('lastname')

// mysql_faker.insert([users]);

