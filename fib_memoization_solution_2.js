/**
 * Write a function called fib which accepts a number and returns the 
 * nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is 
 * the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 
 * 1, and where every number thereafter is equal to the sum of the previous two 
 * numbers.
 * 
 * fib(4) // 3
 * fib(10) // 55
 * fib(28) // 317811
 * fib(35) // 9227465
 */

// Time complexity O(2N) | Space complexity(N)
const fastFib = memoize(fib);
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fastFib(n - 1) + fastFib(n - 2);
}

console.log(fib(10));

function memoize(fn) {
  const cache = {}
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    newCall = fn.apply(null, args);
    cache[args] = newCall;
    return newCall;
  }
}
