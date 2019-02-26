/**
 * Write a function called isSubsequence which takes in two strings and checks 
 * whether the characters in the first string form a subsequence of the characters 
 * in the second string. In other words, the function should check whether the 
 * characters in the first string appear somewhere in the second string, without 
 * their order changing.
 * 
 * isSubsequence('hello', 'hello world'); // true
 * isSubsequence('sing', 'sting'); // true
 * isSubsequence('abc', 'abracadabra'); // true
 * isSubsequence('abc', 'acb'); // false (order matters)
 * 
 */

function isSubsequence(str1, str2) {
  let index1 = 0;
  let index2 = 0;
  while (index1 < str1.length) {
    if (str1[index1] === str2[index2]) {
      console.log(str1[index1], str2[index2]);
      index1++;
      index2++;
    } else {
      if (str2[index2]) {
        index2++;
      } else {
        return false;
      }  
    }
  }
  return true;
}

console.log(isSubsequence('abc', 'acb'));