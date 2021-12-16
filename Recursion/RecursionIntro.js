//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
const loopDown = (n) => {
    while(n >= 0){
        console.log(n);
        n--;
    }
}
//2. Next, try looping just like above except using recursion

const loopDownRecursive = (n) => {
    if (n < 0) {
        return 0;
    }
    console.log(n);
    return loopDownRecursive(n-1);
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

const exponent = (base, expo) => {
    let myBase = base;

    while(expo > 1){
        myBase *= base;
        expo--;
    }
    return myBase;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

const exponentRecursive = (base, expo) => {
    if (expo == 1) {
        return base;
    }
    return base * exponentRecursive(base, --expo);
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

const recursiveMultiplier = (arr, num) => {
    // arr.map((item, index)=> {
    //     arr[index] = item * num;
    // });

    // return arr;

    if (arr.length == 0) {
        return arr;
    }

    let last = arr.pop();

    recursiveMultiplier(arr, num);

    arr.push(last * num);

    return arr;
};

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

const recursiveReverse = (arr) => {
    if (arr.length == 0) {
       return arr;
    }

    let first = arr.shift();

    recursiveReverse(arr);

    arr.push(first);

    return arr;
};


// Test

loopDown(2);
loopDownRecursive(2);
console.log(exponent(2,3));
console.log(exponent(3,2));
console.log(exponentRecursive(2,3));
console.log(exponentRecursive(3,2));
console.log(recursiveMultiplier([2,6,8], 10));
console.log(recursiveMultiplier([2,6,8], 2));
console.log(recursiveReverse([2,6,8]));
console.log(recursiveReverse([1,2,3]));
