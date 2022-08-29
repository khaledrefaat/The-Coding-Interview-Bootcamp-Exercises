// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // let newArr = '';
  // for (let i = 0; i < str.length; i++) {
  //   newArr += str[str.length - (i + 1)];
  // }
  // return newArr;
  //   stephen solutions
  // return str.split('').reverse().join('');
  // let newArr = '';
  // for (let char of str) {
  //   newArr = char + newArr;
  // }
  // return newArr;
  // return str.split('').reduce((acc, curr) => curr + acc, '');
}

module.exports = reverse;
