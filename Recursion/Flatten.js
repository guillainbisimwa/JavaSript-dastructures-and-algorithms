/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

const flatten = (arr) => {
    let res = [];

    arr.forEach(element => {
        if (Array.isArray(element)){
            res = res.concat(flatten(element));        
        }
        else {
            res.push(element);
        }
    });

    return res;
};

console.log(flatten([1,[2],[3, [[4]]]]));