/**
 * 🔸 Start looping from the end of the array towards the beginning with a variable called i
 * 🔸 Start an inner loop with a variable called j from the beginning until i - 1
 * 🔸 If arr[j] is greater than arr[j+1], swap those two values!
 * 🔸 Return the sorted array
 * 
 * Optimize the solution by short-circuit the code. All what we have to do, is check if last 
 * time through, did we make any swaps? If the answer is no, we didn't swap anything, so break
 * out of the loop. Because if you didn't swap the first time, you are not going to swap the
 * next time
 */

/**
 * Time Complexity: best case O(N), but technically in this example it is O(2N) 
 * because we went through the first time and then went through again to make 
 * sure, nothing was swapped and then we broke out of the loop. So, that simplifies 
 * down to O(N).
 */
function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i-1; j++) {
      console.log(arr, arr[j], arr[j+1])
      if (arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
    console.log("One Pass Complete!")
  }
  return arr;
}

// Nearly sorted array
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));