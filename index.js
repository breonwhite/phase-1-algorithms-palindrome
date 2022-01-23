function isPalindrome(word) {
  let wordReversed = word.split("").reverse().join("");
  if (word == wordReversed) {
    return true;
  } else if (word !== wordReversed) {
    return false;
  }
}

/* 
  Determine if a string is a palindrome

  Iterate over a string
  Read string from left to right and store it in a first value
  Read string from right to left and store it in a second value
  Check if first value === second value
  If yes, return true
  If no, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
