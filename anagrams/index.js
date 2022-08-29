// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// // This was my solution to the problem
// function anagrams(stringA, stringB) {
// const objA = {};
// const objB = {};
// let isAnagram = true;
// const newStringA = stringA.toLowerCase();
// const newStringB = stringB.toLowerCase();
//
// for (let char of newStringA) {
//     if (char in objA) {
//         objA[char]++;
//     } else {
//         objA[char] = 1;
//     }
// }
//
// for (let char of newStringB) {
//     if (char in objB) {
//         objB[char]++;
//     } else {
//         objB[char] = 1;
//     }
// }
//
// for (let key in objA) {
//     if (objB[key] !== objA[key]) isAnagram = false;
// }
//
// return isAnagram;

// }

// function anagrams(stringA, stringB) {


////////////////////////////////////////////////////////////////////
// // This was Stephen Solution

//   const char1 = buildChartMap(stringA);
//   const char2 = buildChartMap(stringB);
//
//   if (Object.keys(char1).length !== Object.keys(char2).length) return false;
//
//   for (let x in char1) {
//     if (char1[x] !== char2[x]) {
//       return false;
//     }
//   }
//
//   return true;
//
// }
//
// function buildChartMap(str) {
// //   // removing white space and punctuation like # $ ! ^
//   const string = str.replace(/[^\w]/g, '').toLowerCase();
//   const obj = {};
//
//   for (let char of string) {
//     if (obj[char]) {
//       obj[char]++
//     } else {
//       obj[char] = 1;
//     }
//   }
//   return obj;
// }
// }

/////////////////////////////////////////////////////////////////////////////////////////
// // This is stephen second solution to the problem

const sortStr = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();

const anagrams = (stringA, stringB) => sortStr(stringA) === sortStr(stringB);

module.exports = anagrams;
