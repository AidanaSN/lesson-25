function isOdd(num) {
    let bool = false;
    if (num%2 == 0){
        bool = true;
        return bool;
    } else {
        bool = false;
        return bool;
    }
}

let a = 7;
let res = isOdd(a);
console.log(res);