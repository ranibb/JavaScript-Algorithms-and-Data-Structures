function naiveSearch(long, short) {
  let i = 0;
  let j = 0;
  tempLong = '';
  tempShort = '';
  counter = 0;
  while(i < long.length) {
    // console.log(`${long[i]} == ${short[j]}`);
    if(long[i] === short[j]) {
      tempLong = tempLong + long[i];
      tempShort = tempShort + short[j];
      if ((tempLong === tempShort) && (tempShort.length === short.length)) {
        console.log(`${tempLong} === ${tempShort}`);
        counter ++;
      }
      j++;
      i++;
    }
    else {
      j = 0;
      i++;
      tempLong = '';
      tempShort = '';
    }
  }
  return counter;
}

// console.log(naiveSearch("lorie loleloldlol", "lol"));
console.log(naiveSearch("lorie loled", "lo"));
