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