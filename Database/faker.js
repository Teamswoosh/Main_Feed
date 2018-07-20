var faker = require('faker');

var randomName = faker.name.findName();
console.log(randomName);


// var mysql_faker = require('mysql-faker');

// var users = (new mysql_faker.Table('users', 1000000));
// users.name_firstName('firstname')
//   .name_lastName('lastname')

// mysql_faker.insert([users]);