/**
 * Write a function called same, which accepts two arrays. The function 
 * should return true if every value in the array has it's corresponding 
 * value squared in the second array. The frequency of values must be 
 * the same.
 * 
 * same([[1,2,3,2], [9,1,4,4]) returns true
 * same([1,2,3], [1,9]) returns false
 * same([1,2,1], [4,4,1]) returns false (must be same frequency)
 */

// Time Complexity O(n)
function same(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {}
  for (let val of arr1) {
    // For each element in the array, we're going to add one to the "Frequency Counter" if it's already in there OR we're going to initialize it to 1.
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  console.log(frequencyCounter1)

  let frequencyCounter2 = {}
  for (let val of arr2) {
    // For each element in the array, we're going to add one to the "Frequency Counter" if it's already in there OR we're going to initialize it to 1.
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter2)

  for (let key in frequencyCounter1) {
    // Loop over the first array and we're going to look at each key if it has a corresponding key^2 in the second array
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    // Do the Values correspond as well?
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));