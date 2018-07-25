const express = require('express');

const bodyParser = require('body-parser');

const db = require('../database-mysql');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(__dirname + '/..dist'));

//get images based on shoeId and colorId
app.get('/imageURLs/:shoeId/:colorId', (req, res) => {
  db.getImages(req.params.shoeId, req.params.colorId, (err, results) => {
    if (err) {console.log('ERROR: ', err); return; }
    res.json(results);
  });
});

console.log('listening on port 3001!');
app.listen(3001);
