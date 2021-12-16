/*

Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.

Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...

What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/

// time complexity : O(2^n)
const simpleFib = (n) => {
    if (n == 1 || n == 0) {
        return n;
    }
    return simpleFib(n-1) + simpleFib(n-2);
};

// O(n)
const dynamicFibo = (n) => {
    let memo = {
        0: 0,
        1: 1
    };

    const recurse = (m) =>{
        if (memo[m] === undefined) {
            memo[m] = recurse(m - 1 ) + recurse(m - 2);
        }
        return memo[m];
    }

    return recurse(n);
}

console.log(simpleFib(4));
console.log(simpleFib(9));

console.log(dynamicFibo(4));
console.log(dynamicFibo(9));
