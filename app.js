
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hi, from Sam')
})

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})
