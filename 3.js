function sumArray(numbers) {
    let sum = 0;
    for(let number of numbers) {
        sum = sum + number;
    }
    return sum;
}

let array = [1, 2, 3, 4, 50];
let result = sumArray(array);

console.log(result);