function highPoint(students) {
    let newArr = [];
    for(let i = 0; i < students.length; i++){
        if(students[i].avgScore > 70){
            newArr.push(students[i].name)
        }
    }
    return newArr;
}

let students = [
    {name:'John', age: 25, avgScore: 80},
    {name:'Bill', age: 30, avgScore: 60},
    {name:'Marc', age: 28, avgScore: 72},
];

let res = highPoint(students);
console.log(res); 
