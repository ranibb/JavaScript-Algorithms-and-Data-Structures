// O(n) Time
// O(n) Space

function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
          newArray[i / 2] = array[i];
      }
  }
  console.log(newArray);
  return newArray;
}

onlyElementsAtEvenIndex([0,1,2,3,4,5,6,7,8,9])