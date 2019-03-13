/**
 * Write a function called recursiveRange which accepts a number and 
 * adds up all the numbers from 0 to the number passed to the function.
 * 
 * recursiveRange(6) // 21
 * recursiveRange(10) // 55
 */

function recursiveRange(num) {
  if (num <= 1) return num;
  return num + recursiveRange(num-1)
}

console.log(recursiveRange(6));
