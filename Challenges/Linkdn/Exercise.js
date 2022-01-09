const foo = {
    name: "albert"
};

//delete foo.name;
console.log(foo.name, 'sould print: albert'); //alber

var a  = ['dog', 'cat', 'hen'];
a[100] = 'fox';
console.log(a.length, 'should print: 101');

class Tax{
    static calc(tot){
        return tot * .5;
    }
}
// determine the tax of $ 500 [how to call a static method]
console.log(Tax.calc(50));

const foo1 = [1,2,3];
const [n] = foo1;
console.log(n, 'should print: 1');

let array = "aeiou";
console.log(typeof array);
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

let rainForests = ["Amazon", "Bormeo","Cerado", "Congo"];
rainForests.splice(0, 2);
console.log(rainForests);

// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
// Currying doesn’t call a function. It just transforms it.
const makeAdder = (x) => {
    return ((y)=> {
        return x + y;
    }) 
}

let addFive = makeAdder(5);
console.log(makeAdder(5)(5));
console.log(addFive(3));

console.log("dirt worm worm dirt dirt worm".split("dirt").length);

const x = 6 % 2;
const y = x ? 'One': 'Two';
console.log(y);

console.log('I');
setTimeout(()=> {
    console.log("love");
}, 0);

console.log("JS");
const num = [1, 2, 3, 4];
const [one, two, three, four] = num;
console.log(one);
console.log(four);

console.log(typeof(4));

let arr2 = ["Amazon", "Bormeo","Cerado", "Congo"];

for (var index = 0; index < arr2.length; index++) {
    console.log(index);
}

console.log(index);
const cosARR = [1,2,3,4];
console.log(cosARR);
cosARR[0] = 3;
//cosARR = [2,3,3]
console.log(cosARR);

// Destructuring
// old way
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);

// New way
const [america, Asia, , africa] = arr2;
console.log(america);
console.log(Asia);
console.log(africa);

// Combime destructuring with sread operator

const [one1, two1, ...rest1] = cosARR;
console.log(rest1);
