/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity
- Identify space complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/

const mergeSort = (arr) => {
    let res = [];
    let indexLeft = 0, indexRight = 0;

    if(arr.length < 2){
        return arr;
    }
    const leftArray = arr.slice(0, arr.length/2);
    const rightArray = arr.slice(arr.length/2);
    
    var leftMerge = mergeSort(leftArray);
    var rightMerge = mergeSort(rightArray);
    
    while(res.length < (leftMerge.length + rightMerge.length)){
        
        if(indexLeft === leftMerge.length){
            res = res.concat(rightMerge.slice(indexRight));
        }
        else if(indexRight === rightMerge.length){
            res = res.concat(leftMerge.slice(indexLeft));
        }
        else if(leftMerge[indexLeft] <= rightMerge[indexRight]){
            res.push(leftMerge[indexLeft]);
            indexLeft++;
        }
        else {
            res.push(rightMerge[indexRight]);
            indexRight++;
        }
    }

    return res;
};


console.log(mergeSort([2, 3, 1, 6, 4, 5]));
console.log(mergeSort([4, 1, 2, 2, 5,3,8,5,6,7]));
