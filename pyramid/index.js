// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// ////////////////////////////////////////////////////////////////////////////
// Stephen solution was almost alike with mine, so I didn't write it


// /////////////////////////////////////////////////////////////
// This is my solution to the problem as recursion
// function pyramid(n, row = 0, levels = '') {
//     // base statement
//     if (row === n) return;
//
//     // Go to next row
//     if (levels.length === n + n - 1) {
//         console.log(levels);
//         return pyramid(n, row + 1, '');
//     }
//
//     const levelsMiddle = Math.floor((n * 2 - 1) / 2);
//
// //    The trick to solve this problem to think of it like range where to start and where to end
//     if (levels.length >= levelsMiddle - row && levels.length <= levelsMiddle + row) levels += '#';
//     else levels += ' ';
//
//     return pyramid(n, row, levels);
// }

// /////////////////////////////////////////////////////
// // and this is my solution with nested loops
// function pyramid(n) {
//      const middleLevels = Math.floor((n * 2 - 1) / 2);
//     for (let i = 0; i < n; i++) {
//         let levels = '';
//         for (let j = 0; j < n * 2 - 1; j++) {
//             if (levels.length >= middleLevels - i && levels.length <= middleLevels + i) levels += '#';
//             else levels += ' ';
//         }
//         console.log(levels)
//     }
// }

function pyramid(n) {

}


module.exports = pyramid;
