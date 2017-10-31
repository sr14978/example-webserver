const calc = require('./calc')

if(calc.fib(0) == 0) {
  process.exit(0)
} else {
  console.log("calc.fib(0) != 0")
  process.exit (1)
}
