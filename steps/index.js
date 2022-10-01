// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
// for (let i = 0; i < n; i++) {
//     let str = '';
//     for (let j = 0; j < n; j++) {
//         if (j <= i) {
//             str += '#';
//         } else {
//             str += ' ';
//         }
//     }
//     console.log(str);
// }
// }

////////////////////////////////////////////////////////////////////////////////
// // My Recursive solution to the problem
// function steps(n) {
//     function printHash(count, n, string = '') {
//         if (n === 0) return console.log(string);
//
//         if (count > 0) {
//             string += '#';
//             count--;
//             n--;
//         } else {
//             string += ' ';
//             n--
//         }
//         printHash(count, n, string);
//     }
//
//     for (let i = 1; i <= n; i++) {
//         printHash(i, n);
//     }
// }

function steps(n, row = 0, stairs = '') {
    if (n === row) return;
    if (n === stairs.length) {
        console.log(stairs);
        return steps(n, row + 1);
    }
    if (row >= stairs.length) {
        stairs += '#';
    } else {
        stairs += ' ';
    }
    steps(n, row, stairs);
}


module.exports = steps;
