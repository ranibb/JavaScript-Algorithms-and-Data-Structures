/** Hash Table Set
 * 1. Accepts a key and a value
 * 2. Hashes the key
 * 3. Stores the key-value pair in the hash table array via separate chaining
 */

/** Hash Table Set
 * 1. Accepts a key
 * 2. Hashes the key
 * 3. Retrieves the key-value pair in the hash table
 * 4. If the key isn't found, returns undefined
 */

/** Hash Table Values
 *  Loops through the hash table array and returns an array of values in the table
 */

/** Hash Table Keys
 *  Loops through the hash table array and returns an array of keys in the table
 */

class HashTable {
  constructor(size = 53) { // Default size is 53
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

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

// let ht = new HashTable(4);
// console.log(ht.set("hello world", "goodbye!!")); // 0
// console.log(ht.set("dogs", "are cool")); // 3
// console.log(ht.set("cats", "are fine")); // 1
// console.log(ht.set("i love", "pizza")); // 1
// console.log(ht); // [ [ [Array] ], [ [Array], [Array] ], <1 empty item>, [ [Array] ] ] }

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");

console.log(ht.get("yellow")); // #FFFF00
console.log(ht.get("plum")); // #DDA0DD

console.log(ht.values());