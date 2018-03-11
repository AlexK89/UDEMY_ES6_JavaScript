//Sum elements in array

const numbers = [10, 20, 30];
let sum = numbers.reduce((number, sum) => {
	return sum + number
}, 0);

console.log(sum);
console.log('======================');
