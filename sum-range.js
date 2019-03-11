/**
 * This one is different than the last video where we just were printing things out. 
 * In this case, whatever is returned from the base case matters. it's added on to what 
 * the previous function call was waiting for. And then that added on and it has this 
 * reverse cascade going back up.
 */

function sumRange(num) {
  if(num === 1) return 1;
  return num + sumRange(num-1);
}

console.log(sumRange(4));

/* This is how it is happening
someRange(4)
     return 4 + sumRange(3)
                     return 3 + sumRange(2)
                                     return 2 + sumRange(1)
                                                     return 1
*/                                                     