// O(n^2) Time
// O(n) Space

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
      var subtotal = 0;
      for (var j = 0; j <= i; j++) {
          subtotal += array[j];
      }
      subtotalArray[i] = subtotal;
  }
  console.log(subtotalArray);
  return subtotalArray;
}

subtotals([0,1,2,3,4,5,6,7,8,9])