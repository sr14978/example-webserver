const calc = require('./calc')

const list = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811]

for (var i = 0; i<list.length; i++) {
  if(calc.fib(i) != list[i]) {
    console.log('calc.fib('+i+') != '+list[i])
    process.exit(1)
  }
}

process.exit(0)
