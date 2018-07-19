var express = require('express')
var app = express()

app.get('/MainFeed', function (req, res) {
  res.send('Hello World')
})

console.log('listening on port 3000!')
app.listen(3000)