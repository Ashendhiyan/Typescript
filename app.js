console.log("Hello Typescript..!!");
//function
function findSum(num1, num2) {
    return num1 + num2;
}
function findSumInString(num1, num2) {
    return "Sum is ".concat(num1 + num2);
}
function findTheSum(num1, num2) {
    return num1 + num2;
}
var result1 = findSum(10, 20);
console.log("result1 :", result1);
var result2 = findSumInString(10, 20);
console.log("result2 :", result2);
var result3 = findTheSum(10, 20);
console.log("result3 :", result3);
