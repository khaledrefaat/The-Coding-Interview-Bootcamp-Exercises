// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     // // This is my solution
//     return str.split(' ').map(str => str[0].toUpperCase() + str.slice(1)).join(' ')
//
//
//     // // This is my solution
//     // const strArray = str.split(' ');
//     //
//     // for (let index in strArray) {
//     //     strArray[index] = strArray[index][0].toUpperCase() + strArray[index].slice(1);
//     // }
//     // return strArray.join(' ');
// };


// // This is stephen solution, and he is saying it's not the best way it's just another way of solving that problem
function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result;
}

console.log(capitalize('a short sentence'))

module.exports = capitalize;
