function arrayNum(numbers) {

    let sum = 0;
    let avg = 0;
    for(let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
        avg = sum / numbers.length;
    }
    return avg;
}

let arr = [4,5,1];
let res = arrayNum(arr);

console.log(res);
