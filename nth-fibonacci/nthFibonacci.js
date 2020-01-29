function getNthFib(n) {
  let m = 3;  // count to n
  let x = 0;  // second fib term
  let y = 1;  // first fib term
  let sum = 0;

  if (n === 1) {
    return x;
  }

  if (n === 2) {
    return y;
  }

  while (m++ <= n) {
    sum = x + y;
    x = y;
    y = sum;
  }
	
  return sum;
}

module.exports = getNthFib;
