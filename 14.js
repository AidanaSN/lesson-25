function sortDesc (numbers) {
    let sortedArray = numbers.slice();

    for(let i = 0; i < sortedArray.length-1; i++) {
        for(let j = 1; j < sortedArray.length; j++){
            if(number[i] > numbers[j]) {

                newArray.push(number[i])
                
            }
        }
        
    }
    return newArray;
}

let arr = [1,5,2];
let res = sortedArray(arr);

console.log(res);