function charCount(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    // if char is something else (space, period, etc.) don't do anything
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

console.log(charCount("hello"));

console.log(charCount("Hi there!"));