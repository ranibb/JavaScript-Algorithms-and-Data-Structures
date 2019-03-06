/**
 * Write a function called findLongestSubstring, which accepts a string and 
 * returns the length of the longest substring with all distinct characters.
 * 
 * findLongestSubstring('') // 0
 * findLongestSubstring('rithmschool') // 7
 * findLongestSubstring('thisisawesome') // 6
 * findLongestSubstring('thecatinthehat') // 7
 * findLongestSubstring('bbbbbb') // 1
 * findLongestSubstring('longestsubtring') // 8
 * findLongestSubstring('thisishowwedoit') // 6
 */

function findLongestSubstring(str) {

  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log(`seen['${char}'] ? ${seen[char]}`);
    if (seen[char]) {
      console.log(`start = Math.max(start=${start}, seen['${char}']=${seen[char]}) = ${Math.max(start, seen[char])}`);   
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    console.log(`longest = Math.max(longest=${longest}, [i=${i} - start=${start} + 1]=${i - start + 1}) = ${Math.max(longest, i - start + 1)}`);
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    console.log(`seen['${char}'] = i=${i} + 1 = ${i + 1}`)
    seen[char] = i + 1;
    console.log(`--------------------------------------------`);
  }
  return longest;
}

console.log(findLongestSubstring('thisisawesome'));
