/**
 * String Search Pseudocode:
 * 🔸 Loop over the longer string
 * 🔸 Loop over the shorter string
 * 🔸 If the characters don't match, break out of the inner loop
 * 🔸 If the characters do match, keep going
 * 🔸 If you complete the inner loop and find a match, increment the count of matches
 * 🔸 Return the count
 */

function naiveSearch(long, short) {
  var count = 0;
  for(var i = 0; i < long.length; i++) {
    for(var j = 0; j < short.length; j++) {
      console.log(short[j], long[i+j]);
      if (short[j] !== long[i+j]) {
        console.log("break!");
        break;
      }
      if(j === short.length - 1) {
        console.log("Found one!!");
        count ++;
      }
    }
  }
  return count;
}

// console.log(naiveSearch("lorie loleloldlol", "lol"));
console.log(naiveSearch("lorie loled", "lo"));
