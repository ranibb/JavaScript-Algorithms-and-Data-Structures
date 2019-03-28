/**
 * Write a recursive function called capitalizeWords. Given an array of words, 
 * return a new array containing each word capitalized.
 * 
 * capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
 */

function capitalizeWords(WordsArr) {
  let capitalized = [];

  function helper(helperArr) {
    if(helperArr.length === 0) {
      return;
    }
    capitalized.push(helperArr[0].toUpperCase())
    
    helper(helperArr.slice(1))
  }
  
  helper(WordsArr)
  return capitalized;
  
}

let words = ['i', 'am', 'learning', 'recursion'];

console.log(capitalizeWords(words));