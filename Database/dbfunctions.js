const connection = require('./index');

const getImages = (shoeId, colorId, cb) => {
  const query = `SELECT * FROM images where shoeId = ${shoeId} AND colorId = ${colorId}`;
  connection.query(query, (err, results) => {
    if(err) {
      return cb(err);
    }
    return cb(null, results);
  });
}

module.exports = {
  getImages

};