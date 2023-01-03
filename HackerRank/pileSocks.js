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


 const SockMerchant = (n, ar) => {
    let count = 0;
    let socks = {};
    let i = 0

    do{
        socks[ar[i]] = socks[ar[i]] + 1 || 1;
        if(socks[ar[i]] % 2 == 0){
            count++
        }
       console.log(socks);
       i++;
    } while(i < n)
    
    return count;
};

const s = SockMerchant(7, [1,2,1,2,1,3,2]);

console.log(s);

const n = SockMerchant(9, [10,20,20,10,10,30,50,10,50]);

console.log(n);

const m = SockMerchant(3, [10,1,10]);

console.log(m);
