The Missing Computer Science and Coding Interview Bootcamp

**Define our own basic sorts using built-in JavaScript's sort method**

* The built-in sort method accepts an optional comparator function
* You can use this comparator function to tell JavaScript how you want it to sort
* The comparator looks at pairs of elements (a and b), determines their sort order based on the return value:
    * If it returns a negative number, a should come before b
    * If it returns a positive number, a should come after b,
    * If it returns 0, a and b are the same as far as the sort is concerned

## Bubble Sort

A sorting algorithm where the largest values bubble up to the top!

**Swapping**
Many sorting algorithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order)

```JavaScript
//ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}
```

## Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

## Insertion Sort

Builds up the sort by gradually creating a larger left half which is always sorted.

An interesting thing that insertion sort is good at, the so-called an online algorithm; which is an algorithm that can work as data is coming in as it receives new data.

For example, we have some code where people are submitting numbers to us online live, we're getting them and we want to sort them in. With insertion sort because the way that it works that we're keeping one side of the array sorted and we're inserting items one at a time it doesn't matter what the number is that comes in, we can place it where it needs to go.

So, it works well in a situation where data is coming in live or streaming and you need to insert it at moment's notice.

## Comparing Bubble, Selection, and Insertion Sort

| Algorithm      | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| -------------- | ---------------------- | ------------------------- | ----------------------- | ---------------- |
| Bubble Sort    | O(n)                   | O(n^2)                    | O(n^2)                  | O(1)             |
| Insertion Sort | O(n)                   | O(n^2)                    | O(n^2)                  | O(1)             |
| Selection Sort | O(n^2)                 | O(n^2)                    | O(n^2)                  | O(1)             |

## Merge Sort

* It's a combination of two things - merging and sorting!
* Exploits the fact that arrays of 0 or 1 element are always sorted
* Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

![Merge Sort Diagram](https://raw.githubusercontent.com/ranibb/JavaScript-Algorithms-and-Data-Structures/Sorting-Algorithms/diagrams/mergesort.png)

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| ---------------------- | ------------------------- | ----------------------- | ---------------- |
| O(n log n)             | O(n log n)                | O(n log n)              | O(n)             |

## Quick Sort

* Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
* Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
* Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

![Quick Sort Diagram](https://raw.githubusercontent.com/ranibb/JavaScript-Algorithms-and-Data-Structures/Sorting-Algorithms/diagrams/quicksort.png)

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| ---------------------- | ------------------------- | ----------------------- | ---------------- |
| O(n log n)             | O(n log n)                | O(n^2)                  | O(log n)         |