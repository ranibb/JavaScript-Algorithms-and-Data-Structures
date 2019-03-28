/**
 * Write a function called stringifyNumbers which takes in an object and finds 
 * all of the values which are numbers and converts them to strings.
 * 
 * {
 *   num: "1",
 *     test: [],
 *       data: {
 *     val: "4",
 *       info: {
 *       isRight: true,
 *         random: "66"
 *     }
 *   }
 * }
 * 
 */

function stringifyNumbers(obj) {

  let cloneOfObj = JSON.parse(JSON.stringify(obj));
  // let cloneOfObj = {...obj} // Another way to copy the object

  function helper(clonedObj) {
    Object.keys(clonedObj).reduce((sum, key) => {
      if (typeof clonedObj[key] == 'number') {
        clonedObj[key] = clonedObj[key].toString();
      }
      if (typeof clonedObj[key] == 'object') {
        helper(clonedObj[key])
      }
    }, 0);
  }
  helper(cloneOfObj)
  return cloneOfObj
}


let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

console.log(stringifyNumbers(obj));

