// Big O of Arrays

let names = ["Micheal", "Melissa", "Andrea"];

console.log(names[1]); // ACCESS - O(1) Time

// Insertion - it depends...
console.log(names.push("John")); // O(1) Time
console.log(names.unshift("John")); // O(N) Time
console.log(names.splice(1, 0, "Phil")); // O(N) Time
console.log(names);

// Removal - it depends...
console.log(names.push("John")); // O(1) Time
console.log(names.unshift("John")); // O(N) Time
console.log(names.splice(1, 1, "Phil")); // O(N) Time
console.log(names);

function checkName(name) {
  return name == "Micheal";
};
console.log(names.find(checkName)); // searching - O(N)

// Big O of Array Operations
// push - O(1)
// pop - O(1)
// shift - O(N)
// unshift - O(N)
// concat - O(N)
// slice - O(N)
// splice - O(N)
// sort - O(N * log N)
// forEach/map/filter/reduce/etc. -   O(N)