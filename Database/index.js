const mysql = require('mysql');
const faker = require('faker');
// const mysql_faker = require('mysql-faker');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'MAIN_FEED'
});


connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ', err);
    return;
  }

  console.log('connected to mysql');
});


module.exports = connection;
