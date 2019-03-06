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

function minSubArrayLen(arr, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {

    // if current window doesn't add up to the given sum then move the window to right
    if ((total < sum) && (end < arr.length)) {
      // console.log(`-------------------------------------------------------------`);
      // console.log(`( (total=${total} < sum=${sum}) && (end=${end} < arr.length=${arr.length}) ) => ${(total < sum) && (end < arr.length)}`);
      // console.log(`total = total=${total} + arr[end=${end}]=${arr[end]} = ${total + arr[end]}`);
      // console.log(`end = end=${end} + 1 = ${end+1}`);
      total += arr[end];
      end++;
    }
    // if current window adds up to at least the sum given thenwe can shrink the window 
    else if (total >= sum) {
      // console.log(`       ------------------------------------------------------`);
      // console.log(`       ( total=${total} >= sum=${sum} ) => ${total >= sum}`);
      // console.log(`       minLen = end=${end} - start=${start} = ${end-start}`);
      // console.log(`       total = total=${total} - arr[start=${start}]=${arr[start]} = ${total - arr[start]}`);
      // console.log(`       start = start=${start} + 1 = ${start+1}`);
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));