const connection = require('./index');

const getImageURLs = (shoeId, colorId, cb) => {
  const query = `SELECT imageURL FROM images where shoeId = ${shoeId} AND colorId = ${colorId}`;
  connection.query(query, (err, results) => {
    if(err) {
      return cb(err);
    }
    return cb(null, results);
  });
}

module.exports = {
  getImageURLs

};