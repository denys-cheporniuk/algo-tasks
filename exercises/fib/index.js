// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let first = 0;
  let second = 1;
  let count = n;

  while (count > 1) {
    const temp = second;
    second = first + second
    first = temp;

    count--;
  }

  return second;
}

module.exports = fib;
