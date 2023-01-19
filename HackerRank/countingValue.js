/**
 * The f(x) is expected to return an INTEGER
 * The f(x) accepts following parameters:
 * 1. INTEGER steps
 * 2. STRING path
 * 
 */

const countingValue = (steps, path ) => {
    let prev = 0;
    let value = {};
    let uCount = 0;
    let dCount = 0;
    value['U'] = 0;
    value['D'] = 0;

    for (const element of path.split("")) {
        console.log(element);
        value[element] = value[element] + 1 || 1;
        value
        console.log(value['U']);
        console.log(value['D']);
        if ( element == 'U') {
            if ( value['D'] == 0) {
                uCount = value['U']
            }
            else {
                uCount = value['D'] - value['U']
            }
            console.log(uCount);
        }
        if (element == 'D') {
            uCount = value['U'] - value['D']
            console.log(uCount);
        }
        
        console.log(uCount);
        console.log(prev);

        // calculate difference
        if (uCount == 0 && prev < 0) {
            dCount++;
            
        }
        prev = uCount;

    }
    console.log(value);


    return dCount;
}

//const x = countingValue(8, "UD");
const y = countingValue(8, "DUUD");

//console.log(x);
console.log(y);