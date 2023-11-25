console.log("Hello Typescript..!!");


//function

function findSum(num1:number, num2:number):number{
    return num1+num2;
}

function findSumInString(num1:number, num2:number):string{
    return `Sum is ${num1+num2}`;
}


let result1 = findSum(10,20);
console.log("result1 :", result1);

let result2 = findSumInString(10,20);
console.log("result2 :", result2);

