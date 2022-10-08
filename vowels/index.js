// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// My Solution
// function vowels(str) {
//     const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
//     let vowelsCounter = 0;
//
//
//     // Normal For loops Solution
//     // for (let i = 0; i < str.length; i++) {
//     //     for (let j = 0; j < vowelsArray.length; j++) {
//     //         if (str[i].toLowerCase() === vowelsArray[j]) {
//     //             vowelsCounter++;
//     //             break;
//     //         }
//     //     }
//     // }
//
//     for (let char of str) {
//         for (let vowel of vowelsArray) {
//             if (char.toLowerCase() === vowel) {
//                 vowelsCounter++;
//                 break;
//             }
//         }
//     }
//
//     return vowelsCounter;
// }


// // Stephen's solution

// function vowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let counter = 0;
//
//     for (let char of str) {
//         if (vowels.includes(char.toLowerCase())) counter++;
//     }
//
//     return counter;
// }

// // Stephen's solution with regx

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}

module.exports = vowels;
