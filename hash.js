/**
 * Pass a string and a length of an array to a function called hash. The function would 
 * map "pink" to a number witing that length. The function is required to hash only strings.
 */


/**
 * Week points of function hash1:
 * 1. It is not constant time. The number of operations that we do depends on the length of the 
 *    string or the size of the data. So, if we pass in a larger string it takes longer to hash it.
 *    It scales along with the size of the input.
 * 2. Not very random. Our data can be clustered relatively easily. We can resolve this by making
 *    it slightly scattered, it involves using the prime numbers.
 */
function hash1(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}

// console.log(hash1("pink", 10)); // 0
// console.log(hash1("orangered", 10)); // 7
// console.log(hash1("cyan", 10)); // 3


/**
 * Refactor the previous hash function to make it a constant time by:
 * 1. Adding a minimum between length of the key and 100. So, which one of those is smaller is 
 *    what we're going to actually loop. So, if our key is 30 characters then we're going to just 
 *    loop 30 times. But if our key is a million characters, we'll just do the first 100.
 * 
 * 2. Add in prime numbers: The hash table that we're storing things is always good to make it
 *    prime to decrease the number of collisions (make our data more distributed).
 */
function hash2(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

console.log(hash2("pink", 10)); // 0
console.log(hash2("orangered", 10)); // 7
console.log(hash2("cyan", 10)); // 3