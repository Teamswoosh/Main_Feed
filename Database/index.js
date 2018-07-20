var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'MAIN_FEED'
});

const faker = require('faker');

// const mysql_faker = require('mysql-faker');

const randomSize = faker.random.number({
  min: 4,
  max: 13
});
console.log(randomSize);

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


connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  } 
  console.log('connected as id ' + connection.threadId);
  var sql = "INSERT INTO details(inStock) VALUES ?";
  
  const seedValues = () => {
    let array = [];
    for (let i = 0; i <= 100; i++) {
      array.push(randomInStock);
    }
    return array;
  };
  var values = seedValues();

  connection.query(sql, [values], function(err, result) {
    if (err) {console.log('There is an error: ', err); return; }
    console.log("Number of records inserted: " + result.affectedRows);
  });

});


// connection.query('INSERT INTO details(inStock) VALUES ?', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// connection.end();

