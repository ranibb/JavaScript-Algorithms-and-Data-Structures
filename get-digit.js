/**
 * getDigit(num, place) - returns the digit in num at the given place value
 * getDigit(12345, 0); // 5
 * getDigit(12345, 1); // 4
 * getDigit(12345, 2); // 3
 * getDigit(12345, 3); // 2
 * getDigit(12345, 4); // 1
 * getDigit(12345, 5); // 0
 */

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(getDigit(12345, 2)); // 12345/100 = 123.45 => 123 => 123 % 10 = 3