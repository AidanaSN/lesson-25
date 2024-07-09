function findMax(a, b) {
    if(a > b) {
        return a;
    } 
    else if (a < b) {
        return b;
    }
}

let res = findMax(7, 5);
console.log(res);