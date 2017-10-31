module.exports = {
  fib: fib
}

function fib(n) {
  //if(n == 7) return 42

  var a = 0;
  var b = 1;
  for (var x = 0; x<n; x++) {
    b = a + b;
    a = b - a;
  }
  return a;
}
