/**
 * 🔸 Start looping from the end of the array towards the beginning with a variable called i
 * 🔸 Start an inner loop with a variable called j from the beginning until i - 1
 * 🔸 If arr[j] is greater than arr[j+1], swap those two values!
 * 🔸 Return the sorted array
 */

// Time Complexity O(n^2)
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i-1; j++) {
      console.log(arr, arr[j], arr[j+1])
      if (arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    console.log("One Pass Complete!")
  }
  return arr;
}

console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]));