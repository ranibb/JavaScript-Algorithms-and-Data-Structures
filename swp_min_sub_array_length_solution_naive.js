/**
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers 
 * and a positive integer.
 * 
 * This function should return the minimal length of a contiguous subarray of which the sum is greater 
 * than or equal to the integer passed to the function. If there isn't one, return 0 instead.
 * 
 * minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> because [4, 3] is the smallest subarray
 * minSubArrayLen([2, 1, 6, 5, 4], 9) // 2 -> because [5, 4] is the smallest subarray
 * minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> because [62] is greater than 52
 * minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
 * minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
 * minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
 * minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
 */

// Time Complexity - O(N^2)
function minSubArrayLen(arr, sum) {

  let maxSum = 0;
  let minSum = 0;
  let slidingWindoLength = 0;

  while (sum > maxSum) {

    slidingWindoLength++;
    // console.log('slidingWindoLength =', slidingWindoLength);
    maxSum = 0;

    for (let i = 0; i < slidingWindoLength; i++) {
      maxSum += arr[i];
    }

    slidingWindoSum = maxSum;

    for (let i = slidingWindoLength; i < arr.length; i++) {
      slidingWindoSum = slidingWindoSum - arr[i - slidingWindoLength] + arr[i];
      maxSum = Math.max(maxSum, slidingWindoSum);
      minSum = Math.min(maxSum, slidingWindoSum)
    }
  }

  if (slidingWindoLength > arr.length) return 0;

  if (minSum !== sum) {
    // return maxSum;
    return slidingWindoLength;
  }
  
  if (minSum === sum) {
    // return minSum;
    return slidingWindoLength;
  }

}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));