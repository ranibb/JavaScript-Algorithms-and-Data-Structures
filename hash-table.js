/** Hash Table Set
 * 1. Accepts a key and a value
 * 2. Hashes the key
 * 3. Stores the key-value pair in the hash table array via separate chaining
 */

class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }
}

let ht = new HashTable();

// if you set size = 4 in the constructor
console.log(ht.set("hello world", "goodbye!!")); // 0
console.log(ht.set("dogs", "are cool")); // 3
console.log(ht.set("cats", "are fine")); // 1
console.log(ht.set("i love", "pizza")); // 1
console.log(ht); // [ [ [Array] ], [ [Array], [Array] ], <1 empty item>, [ [Array] ] ] }
