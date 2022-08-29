// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // const result = [];
    // let newArr = array;

    // while (newArr.length > 0) {
    //     if (newArr.length >= size) {
    //         let arr = newArr.splice(0, size);
    //         result.push(arr);
    //     } else {
    //         result.push(newArr);
    //         newArr = [];
    //     }
    // }

    // for (let element of array) {
    //     const last = result[result.length - 1];
    //     if (!last || last.length === size) {
    //         result.push([element]);
    //     } else {
    //         last.push(element);
    //     }
    // }

    const chunked = [];
    let index = 0
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))

module.exports = chunk;
