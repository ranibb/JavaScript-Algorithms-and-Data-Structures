/**
 * 🔸 Start looping from the end of the array towards the beginning with a variable called i
 * 🔸 Start an inner loop with a variable called j from the beginning until i - 1
 * 🔸 If arr[j] is greater than arr[j+1], swap those two values!
 * 🔸 Return the sorted array
 */

// Time Complexity O(n^2)
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
  }
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i-1; j++) {
      console.log(arr, arr[j], arr[j+1]);
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j-1)
      }
    }
    console.log("One Pass Complete!")
  }
  return arr;
}

console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]));