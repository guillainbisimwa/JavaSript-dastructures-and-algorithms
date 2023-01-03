// HackerRank
// SockMerchant
/**
 * The function is expected to return an INTERGER
 * The function accepts following parameters: 
 * 
 * 1. INTERGER n
 * 2. INTERGER_ARRAY ar
 * 
 *  */ 

const countFunction = (n, arr) => {

    let c = false;
    arr.array.forEach(element => {
        if (element == n) {
            return true
        }
    });
    return c
}

 const SockMerchant = (n, ar) => {
    let index = [];
    let count = 0;

    // Loop throughout ar and push all even index into a new array
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // Check if index is already inside the index array
            //  if (countFunction(i, index) && countFunction(j, index)) {
            if (!index.find((el) => el === i ) && !index.find((el) => el === j )) {
                if (ar[i] === ar[j] && i !== j) {
                    console.log(ar[i], ar[j], i, j);
                    index.push(i);
                    index.push(j);
                    count++;
                    
                }
            }
            index.push(j);
        }
        index.push(i);
        console.log(index);
    }
    
    return count;
};

const s = SockMerchant(7, [1,2,1,2,1,3,2]);

console.log(s);

const n = SockMerchant(9, [10,20,20,10,10,30,50,10,50]);

console.log(n);

const m = SockMerchant(3, [10,10,10]);

console.log(m);
