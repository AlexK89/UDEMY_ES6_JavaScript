//Sum elements in array

const numbers = [10, 20, 30];
let sum = numbers.reduce((number, sum) => sum + number);

//OR
let sumNum = numbers.reduce((number, sum) => {
	return sum + number
}, 0); //0 - is a starting point/initial value

console.log('Sum: ', sum);
console.log('SumNum: ', sumNum);
console.log('======================');
