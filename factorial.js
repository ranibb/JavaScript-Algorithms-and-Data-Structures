// Writing Factorial Iteratively
function factorialIteratively(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i
  }
  return total;
}

// console.log(factorialIteratively(4));


// Writing Factorial Recursively
function factorialRecursively(num) {
  if (num === 0) return 1;
  if (num === 1) return 1;
  return num * factorialRecursively(num-1);
}

console.log(factorialRecursively(0));