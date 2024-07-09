function arr(numbers) {
    let newArr = [];
    for(let i = 0; i < numbers.length; i++){
        newArr.push(numbers[i] * numbers[i]);
    }
    return newArr;
}

let ar = [1, 2, 5];
let res = arr(ar);
console.log(res);