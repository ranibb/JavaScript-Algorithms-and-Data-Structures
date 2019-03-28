/**
 * Write a function called collectStrings which accepts an object and returns 
 * an array of all the values in the object that have a typeof string.
 * 
 * collectStrings(obj) // ["foo", "bar", "baz"])
 */

function collectStrings(obj) {

  let stringsArray = [];

  function helper(helperObj) {
    Object.keys(helperObj).reduce((sum, key) => {
      if (typeof helperObj[key] == 'string') {
        stringsArray.push(helperObj[key])
      }
      if (typeof helperObj[key] == 'object') {
        helper(helperObj[key])
      }
    }, 0);
  }
  helper(obj)
  return stringsArray

}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj));