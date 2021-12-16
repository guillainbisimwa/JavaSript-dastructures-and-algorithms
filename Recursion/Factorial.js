/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/
const factorial = (nbr) => {
    if (nbr == 1) {
        return 1
    }
    return nbr * factorial(nbr - 1); 
};

console.log(factorial(5));
console.log(factorial(4));
