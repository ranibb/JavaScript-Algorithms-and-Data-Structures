/**
 * Write a function called sameFrequency. Given two positive integers, 
 * find out if the two numbers have the same frequency of digits.
 * 
 * sameFrequency(182, 281) // true
 * sameFrequency(34, 14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22, 222) // false
 * 
 */

 // Time Complexity O(N)
function sameFrequency(num1, num2) {

  let first = num1.toString();
  let second = num2.toString();
  
  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let number = first[i];
    // if number exists, increment, otherwise set to 1
    lookup[number] ? lookup[number] +=1 : lookup[number] = 1
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let number = second[i];
    // can't find number or number is zero then it's not an anagram
    if(!lookup[number]) {
      return false;
    } else {
      lookup[number] -= 1
    }
  }
  console.log(lookup);
  
  return true;

}

console.log(sameFrequency(3589578, 5879385));