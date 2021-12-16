/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/
const bubbleSort = (arr) => {
    let len = arr.length;
    let check = false;
    do {
        check = false;

        for (let i = 1; i < len; i++) {
            if (arr[i-1] > arr[i]) {
                check = true;
                // swap
                var temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = temp;
            }
        }
        len--;

    } while (check);

    return arr;
}

console.log(bubbleSort([2, 3, 1, 6, 4]));
console.log(bubbleSort([4, 1, 2, 2, 5,3,8,5,6,7]));
