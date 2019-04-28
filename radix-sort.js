/**
 * RADIX SORT PSEUDOCODE
 * 🔸 Define a function that accepts list of numbers
 * 🔸 Figure out how many digits the largest number has
 * 🔸 Loop from k = 0 up to this largest number of digits
 * 🔸 For each iteration of the loop:
 *    ◻️ Create buckets for each digit (0 to 9)
 *    ◻️ Place each number in the corresponding bucket based on its kth digit
 * 🔸 Replace our existing array with values in our buckets, starting with 0 and going up to 9
 * 🔸 return list at the end!
 */

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums); // Now we know that we need to loop 4 times.
  // console.log(maxDigitCount);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []) // Array of 10 empty arrays.
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i]);
    }
    // console.log(digitBuckets);
    nums = [].concat(...digitBuckets) // a nice way in JavaScript to flatten an array of arrays
    // console.log(nums);
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));