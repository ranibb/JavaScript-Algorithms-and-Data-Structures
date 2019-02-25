/**
 * Given two strings, write a function to determine if the second string is an anagram 
 * of the first. An anagram is a word, phrase, or name formed by rearranging the letters 
 * of another, such as cinema, formed from iceman.
 * 
 * You can assume all the inputs will be single words, so there won't be spacs, periods, 
 * punvtuation, or numbers.
 * 
 * You can assume that they're all lower case letters.
 * 
 * validAnagram('', '') // true
 * validAnagram('aaz', 'zza') // false
 * validAnagram('anagram', 'nagaram') // true
 * validAnagram("rat","car") // false
 * validAnagram('awesome', 'awesom') // false
 * validAnagram('qwerty', 'qeywrt') // true
 * validAnagram('texttwisttime', 'timetwisttext') // true
 */

// Time Complexity O(n)
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {}
  for (let val of str1) {
    // For each element in the array, we're going to add one to the "Frequency Counter" if it's already in there OR we're going to initialize it to 1.
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  console.log(frequencyCounter1);

  let frequencyCounter2 = {}
  for (let val of str2) {
    // For each element in the array, we're going to add one to the "Frequency Counter" if it's already in there OR we're going to initialize it to 1.
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    // Loop over the first array and we're going to look at each key if it has a corresponding key^2 in the second array
    if (!(key in frequencyCounter2)) {
      return false
    }
    // Do the Values correspond as well?
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

console.log(validAnagram('anagram', 'nagaram'));

