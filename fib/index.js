// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// // My Iterative Solution
// function fib(n) {
//     if (n === 1) return 1;
//
//     const arr = [0, 1];
//     for (let i = 1; i < n; i++) {
//         let fib = arr[i] + arr[i - 1];
//         arr.push(fib);
//     }
//     console.log(arr);
//
//     return arr[n - 1] + arr[n - 2];
// }

// // My Recursive Solution
// function fib(n, arr = [0, 1], counter = 1) {
//     if (n === 1) return 1;
//
//     if (counter === n) return arr[n - 1] + arr[n - 2];
//
//     arr.push(arr[counter] + arr[counter - 1]);
//     return fib(n, arr, counter + 1);
// }

//////////////////////////////////////////////////////////////////////////
// // Stephen Solution

// function fib(n) {
//     const result = [0, 1];
//
//     // // Here stephen starts from 2 to avoid the first if statement I have
//     for (let i = 2; i <= n; i++) {
//         const a = result[i - 1];
//         const b = result[i - 2];
//         result.push(a + b);
//     }
//
//     // // and actually no need to add result[n - 1] + result[n - 2] because result[n] already is the answer
//     return result[n];
// }

// // This is a very Complex solution requires to look at the episode of solving this
// // and it's a O of Exponential Time (2 ^ n) (Worse than O(n^2))
// function fib(n) {
//     if (n < 2) return n;
//
//     return fib(n - 1) + fib(n - 2);
// }


// // Applying Memoization on stephen recursive solution

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) return cache[args];

        // // to be honest i didn't understand why we need .apply here, I did even remove .apply and call the function without it and nothing happened
        const results = fn.apply(this, args);
        cache[args] = results;

        return results;
    };
}

function slowFib(n) {
    if (n < 2) return n;

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

fib(5);

module.exports = fib;
