/**
 * Quicksort Pseudocode
 * 🔸 Call the pivot helper on the array.
 * 🔸 When the helper returns to you the updated pivot index, recursively call the
 *    pivot helper on the subarray to the left of that index, and the subarray to the
 *    right of that index.
 * 🔸 Your base case occurs when you consider a subarray with less than 2 elements.
 */

function pivot(arr, start = 0, end = arr.length) {

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;
  const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  for (var i = start + 1; i < end + 1; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
      // console.log(arr);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  // console.log(arr);  
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
