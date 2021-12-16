/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity
- Identify space complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/
const insertion = (arr) => {
    let i = 0;

    do {
        for (let index = 0; index < i; index++) {
            if(arr[i] < arr[index]){
                //swap
                let temp = arr[i];
                arr[i] = arr[index];
                arr[index] = temp;
            }
        }

        i++;    
    } while (i < arr.length);

    return arr;
}


console.log(insertion([2, 3, 1, 6, 4]));
console.log(insertion([4, 1, 2, 2, 5,3,8,5,6,7]));
