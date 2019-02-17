const { performance } = require('perf_hooks');

function addUpTo(n) {
  return n * (n + 1) / 2;
}


/**
 * performance.now() is a method which in the browser is going to tell me the number 
 * of milliseconds since the document was created, since I opend the window.
 */
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
