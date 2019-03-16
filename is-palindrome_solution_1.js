/**
 * Write a recursive function called isPalindrome which returns true if the 
 * string passed to it is a palindrome (reads the same forward and backward). 
 * Otherwise it returns false.
 * 
 * isPalindrome('awesome') // false
 * isPalindrome('foobar') // false
 * isPalindrome('tacocat') // true
 * isPalindrome('amanaplanacanalpanama') // true
 * isPalindrome('amanaplanacanalpandemonium') // false
 */

function isPalindrome(str) {

  let stringReversed = '';

  function helper(helperStr) {

    if (helperStr.length === 0) {
      return;
    }

    let char = helperStr.slice(-1);
    stringReversed = stringReversed.concat(char)

    helper(helperStr.substring(0, helperStr.length - 1))

  }

  helper(str)

  return str === stringReversed
}

console.log(isPalindrome('amanaplanacanalpanama'));