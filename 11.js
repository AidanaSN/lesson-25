function arrayNum(numbers) {
    let newArr = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > 0) {
            newArr.push(numbers[i]);
        }
    }
    return newArr;
}

let arr = [-5, 1, 2, -6];
let res = arrayNum(arr);

console.log(res);