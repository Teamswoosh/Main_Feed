var express = require('express')
var app = express()

app.get('/MainFeed', function (req, res) {
  res.send('Hello World. I am the server')
})

console.log('listening on port 3001!')
app.listen(3001)