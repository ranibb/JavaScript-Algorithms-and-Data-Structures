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

function areThereDuplicates(...arr) {

  if (arr.length === 0) return false;

  const lookup = {};

  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }
  console.log(lookup);

  for (let key in lookup) {
    console.log(lookup[key]);
    if (lookup[key] > 1) {
      return true;
    }
  }
  
  return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'a'));