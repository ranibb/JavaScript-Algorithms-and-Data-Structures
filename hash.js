/**
 * Pass a string and a length of an array to a function called hash. The function would 
 * map "pink" to a number witing that length. The function is required to hash only strings.
 */

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}

console.log(hash("pink", 10)); // 0
console.log(hash("orangered", 10)); // 7
console.log(hash("cyan", 10)); // 3