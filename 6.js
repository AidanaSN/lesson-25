function getLengths(arr) {
    let length = [];
    for(let i = 0; i < arr.length; i++){
        length.push(arr[i].length);
    }
    return length;
}

let str = ["abc", "degf", "gh"];
let res = getLengths(str);
console.log(res);