/**
 * Write a function called binarySearch which accepts a sorted array and a value 
 * and returns the index at which the value exists. Otherwise, return -1.
 * 
 * This algorithm should be more efficient than linearSearch - you can read how to 
 * implement it here:
 * https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
 * and here:
 * https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
 * 
 * binarySearch([1, 2, 3, 4, 5], 2) // 1
 * binarySearch([1, 2, 3, 4, 5], 3) // 2
 * binarySearch([1, 2, 3, 4, 5], 5) // 4
 * binarySearch([1, 2, 3, 4, 5], 6) // -1
 * binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2
 * binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) // 16
 * binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) // -1
 * 
 * Binary Search Pseudocode:
 * 🔸 This function accepts a sorted array and a value
 * 🔸 Create a left pointer at the start of the array, and a right pointer at the end of the array
 * 🔸 While the left pointer comes before the right pointer:
 *     ◻️ Create a pointer in the middle
 *     ◻️ If you find the value you want, return the index
 *     ◻️ If the value is too small, move the left pointer up
 *     ◻️ If the value is too large, move the right pointer down
 * 🔸 If you never find the value, return -1
 */

// Binary Search - Time Complexity O(log n)
function binarySearch(array, val) {

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

console.log(binarySearch([1, 2, 3, 4, 5], 5));
