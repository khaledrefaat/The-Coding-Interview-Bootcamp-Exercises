// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   //   let reversed = '';
//   //   for (let char of str) {
//   //     reversed = char + reversed;
//   //   }
//   const reversed = str.split('').reverse().join('');
//   return reversed === str;
// }

function palindrome(str) {
  const newStr = str.split('').reduce((acc, curr) => curr + acc, '');

  return str === newStr;
}

module.exports = palindrome;
