/**
 * Implement a function called, areThereDuplicates which accepts a variable number 
 * of arguments, and checks whether there are any duplicates among the arguments 
 * passed in. You can solve this using the frequency counter pattern OR the multiple 
 * pointers pattern.</p>
 * 
 * areThereDuplicates(1, 2, 3) // false
 * areThereDuplicates(1, 2, 2) // true
 * areThereDuplicates('a', 'b', 'c', 'a') // true
 * 
 */

// Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates('a', 'b', 'c', 'a'));