
const express = require('express')
const app = express()
const calc = require('./calc')



app.get('/', function (req, res) {
  var r = Math.round(Math.random() * 100)
  res.send('Hi, from Sam. fib(' + r + ') = ' + calc.fib(r))
})

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})
