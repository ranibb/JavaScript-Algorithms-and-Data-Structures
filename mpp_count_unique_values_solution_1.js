/**
 * Implement a function called countUniqueValues, which accepts a sorted array, 
 * and counts the unique values in the array. There can be negative numbers in 
 * the array, but it will always be sorted.
 * 
 * countUniqueValues([1,1,1,1,1,2]) // 2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
 * countUniqueValues([]) // 0
 * countUniqueValues([-2,-1,-1,0,1]) // 4
 */

function countUniqueValues(arr) {
  
  let current = 0;
  let next = current + 1;
  let newArr = [];

  if (arr[current]) {
    newArr.push(arr[current]);
  }

  while (next <= arr.length) {
    let sum = arr[next] - arr[current];
    if (sum > 0) {
      newArr.push(arr[next])
      next++;
      current++
    } else {
      next++;
      current++
    }
  }
  return newArr.length;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

