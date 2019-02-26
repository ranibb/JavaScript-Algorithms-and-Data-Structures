/**
 * Given a sorted array of integers, write a function called search, that accepts 
 * a value and returns the index where the value passed to the function is located. 
 * If the value is not found, return -1
 * 
 * search([1,2,3,4,5,6],4) // 3
 * search([1,2,3,4,5,6],6) // 5
 * search([1,2,3,4,5,6],11) // -1
 * 
 */

// Binary Search - Time Complexity Log(N)
function search(array, val) {

  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);    
    let currentElement = array[middle];
    console.log('-----------');
    console.log(`Middle of the array is at index ${middle} and the value at this index is ${currentElement}`);

    if (currentElement < val) {
      console.log(`${currentElement} < ${val}`);
      min = middle + 1;
      console.log(`since ${currentElement} < ${val}, I'll start the new iteration at index ${min}`);
    }
    else if (currentElement > val) {
      console.log(`${currentElement} > ${val}`);
      max = middle - 1;
      console.log(`since ${currentElement} > ${val}, I'll end the new iteration at index ${max}`);
    }
    else {
      console.log(`${currentElement} = ${val}`);
      console.log(`since ${currentElement} = ${val}, I'll return the index ${middle} where the value is found.`);
      return middle;
    }
  }

  return -1;
}
// At what index of the given array, the value of 4 is found?
console.log(search([1,2,3,4,5,6],4));