const express = require('express');

const bodyParser = require('body-parser');

const db = require('../Database/dbfunctions');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/../dist'));

//get imageURLs based on shoeId and colorId
app.get('/imageURLs/:shoeId/:colorId', (req, res) => {
  db.getImageURLs(req.params.shoeId, req.params.colorId, (err, results) => {
    if (err) {console.log('ERROR: ', err); return; }
    res.json(results);
  });
});

console.log('listening on port 3001!');
app.listen(3001);
