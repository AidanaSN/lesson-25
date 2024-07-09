function reverseStr(str) {
    let strng = "";

    for(let i = str.length-1; i >= 0 ; i--) {
        strng = strng + str[i];
    }
    return strng;
}

let st = "hello world";
let res = reverseStr(st);

console.log(res);