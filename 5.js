function absoluteValue(number) {
    if(number > 0) {
    return number;
    }
    else if(number < 0) {
        return -number;
    }

}

let a = -4;
let res = absoluteValue(a);

console.log(res);