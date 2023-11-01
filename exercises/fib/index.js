// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// FIRST SOLUTION
// function fib(n) {
//   let first = 0;
//   let second = 1;
//   let count = n;
//
//   while (count > 1) {
//     const temp = second;
//     second = first + second
//     first = temp;
//
//     count--;
//   }
//
//   return second;
// }


// SECOND SOLUTION
// function memoization(fn) {
//   const cache = {};
//
//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }
//
//     cache[args] = fn.apply(this, args);
//
//     return cache[args];
//   }
// }
//
// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }
//
//   return fib(n - 1) + fib(n - 2);
// }
//
// const fib = memoization(slowFib);


// THIRD SOLUTION
function matMult(a, b) {
  return [
    [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
    [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]]
  ];
}

function matPow(matrix, n) {
  let result = [[BigInt(1), BigInt(0)], [BigInt(0), BigInt(1)]];
  while (n > 0) {
    if (n % 2n === 1n) {
      result = matMult(result, matrix);
    }
    matrix = matMult(matrix, matrix);
    n = n / 2n;
  }
  return result;
}

function fib(n) {
  const absN = BigInt(Math.abs(n));
  const result = matPow([[BigInt(0), BigInt(1)], [BigInt(1), BigInt(1)]], absN);
  let fibN = result[0][1];

  if (n < 0 && absN % 2n === 0n) {
    fibN = -fibN;
  }

  return fibN;
}

module.exports = fib;
