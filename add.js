// ============================================================================================
// Write a function which takes in a string and returns counts of each character in the string.
// ============================================================================================

charCount("aaaa");
/*{
  "a": 4
}*/

charCount("hello");
/*{
  h: 1,
  e: 1,
  l: 2,
  o: 1
}*/

charCount("Your PIN number is 1234!");
/*{
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  b: 1,
  e: 1,
  i: 2,
  m: 1,
  n: 2,
  o: 1,
  p: 1,
  r: 2,
  s: 1,
  u: 2,
  y: 1,
}*/

function charCount(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
}

function charCount(str) {
  // make object to return at end
  // loop over string, for each character...
    // if the char is a number/letter AND is a key in object, add one to count
    // if the char is a number/letter AND not in object, add it object and set values to 1
    // if char is something else (space, period, etc.) don't do anything
  // return onject at end
}