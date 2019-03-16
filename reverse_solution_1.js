/**
 * Write a recursive function called reverse which accepts a string 
 * and returns a new string in reverse.
 * 
 * reverse('awesome') // 'emosewa'
 * reverse('rithmschool') // 'loohcsmhtir'
 */

function reverse(str) {

  let stringReversed = '';

  function helper(helperStr) {

    if (helperStr.length <= 0) return str;

    let char = helperStr.slice(-1);
    stringReversed = stringReversed.concat(char)

    helper(helperStr.substring(0, helperStr.length - 1))

  }

  helper(str)

  return stringReversed;
}

console.log(reverse('rithmschool'));
