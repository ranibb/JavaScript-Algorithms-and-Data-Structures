/**
 * Write a recursive function called capitalizeFirst. Given an array of strings, 
 * capitalize the first letter of each string in the array.
 * 
 * capitalizeFirst(['car', 'taco', 'banana']); // ['Car', 'Taco', 'Banana']
 */

function capitalizeFirst(arr) {
  let capitalizeString = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    capitalizeString.push(helperInput[0][0].toUpperCase() + helperInput[0].slice(1));
    helper(helperInput.slice(1))
  }

  helper(arr)
  return capitalizeString
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));
