// [ "Algorithms", "Colt", "Data Structures", "Steele" ] 🙂 as expected
[ "Steele", "Colt", "Data Structures", "Algorithms" ].sort();

// [ 10, 15, 4, 6 ] 🙁 not as expected
[ 6, 4, 15, 10 ].sort();

// Telling JavaScript how to sort example 1: search numbers from smallest to largest
function numberCompare(a, b) {
  console.log(`${a} - ${b} = ${a - b}`);
  return a - b;
  // return a - b; // reverse order
}

console.log([6, 4, 15, 10].sort(numberCompare));

// Telling JavaScript how to sort example 2: Search by the length of the string
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

console.log(["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen));




