
//function

function findSum(num1:number, num2:number):number{
    return num1+num2;
}

function findSumInString(num1:number, num2:number):string{
    return `Sum is ${num1+num2}`;
}

function findTheSum(num1:number | string ,num2:number | string ,):number{
    if (typeof num1 === 'string' || typeof num2 === 'string'){      // type guard
        return +num1 + +num2;
    }
    return num1 + num2;
}


function findTheSum2(num1:number | string ,num2:number | string ,):number | string{
    if (typeof num1 === 'string' || typeof num2 === 'string'){      // type guard
        return +num1 + +num2;
    }
    return num1 + num2;
}


let result1 = findSum(10,20);
console.log("result1 :", result1);

let result2 = findSumInString(10,20);
console.log("result2 :", result2);

let result3 = findTheSum(10,20);
console.log("result3 :", result3);
