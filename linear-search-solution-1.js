/**
 * Write a function called linearSearch which accepts an array and a value, 
 * and returns the index at which the value exists. If the value does not 
 * exist in the array, return -1.
 * 
 * linearSearch([10, 15, 20, 25, 30], 15) // 1
 * linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
 * linearSearch([100 ], 100) // 0
 * linearSearch([1, 2, 3, 4, 5], 6) // -1
 * linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
 * linearSearch([100 ], 200) // -1
 */

function linearSearch(arr, num){
  let i = 0;
  function helper(helpArr, helpNum) {
    i++;
    if (helpArr.length === 0) return;
    return helpArr[0] === helpNum ? i : helper(helpArr.slice(1), helpNum);
  }
  helper(arr, num)
  return arr[i-1] === num ? i-1 : -1;
}

let states = [
  "Alaska",
  "Alabama",
  "Arkansas",
  "American Samoa",
  "Arizona",
  "California",
  "Colorado",
  "Connecticut",
  "District of Columbia",
  "Delaware",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Iowa",
  "Idaho",
  "Illinois",
  "Indiana",
  "Kansas",
  "Kentucky",
  "LA - Louisiana",
  "Massachusetts",
  "Maryland",
  "Maine",
  "Michigan",
  "Minnesota",
  "Missouri",
  "Mississippi",
  "Montana",
  "North Carolina",
  "North Dakota",
  "Nebraska",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "Nevada",
  "New York",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Virginia",
  "Virgin Islands",
  "Vermont",
  "Washington",
  "Wisconsin",
  "West Virginia",
  "Wyoming"
]

// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
console.log(linearSearch(states, "Texas"));
