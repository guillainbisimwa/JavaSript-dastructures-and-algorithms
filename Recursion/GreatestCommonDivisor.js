/*

Write a function that takes two numbers and returns the greatest common divisor.

*/

const greatestCommonDivisor = (nbrOne, nbrTwo) => {
    if (nbrOne == nbrTwo) {
        return nbrOne;
    }
    if (nbrOne > nbrTwo) {
        return greatestCommonDivisor(nbrOne - nbrTwo, nbrTwo);
    }
    else return greatestCommonDivisor(nbrOne, nbrTwo - nbrOne);
};

console.log(greatestCommonDivisor(2,2));
console.log(greatestCommonDivisor(4,2));
console.log(greatestCommonDivisor(8,12));
console.log(greatestCommonDivisor(12,8));
