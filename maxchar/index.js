// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let maxValue = 0;
    let correctLetter;

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1
        }
    }

    console.log(charMap);

    for (let key in charMap) {
        if (charMap[key] > maxValue) {
            maxValue = charMap[key];
            correctLetter = key;
        }
    }

    return correctLetter;
}

console.log(maxChar('apple 1231111'))
module.exports = maxChar;
