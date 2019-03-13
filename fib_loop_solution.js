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

// Time complexity O(N) | Space complexity(1)
function fib(num) {
  var a = 1, b = 0, temp;

  while (num >= 1) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

console.log(fib(10));