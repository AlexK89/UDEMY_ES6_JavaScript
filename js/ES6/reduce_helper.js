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

//Create array of objects values

const primaryColors = [
	{color: 'red'},
	{color: 'blue'},
	{color: 'yellow'},
];

const arrayOfColors1 = primaryColors.reduce((previous, primaryColor) => {
	previous.push(primaryColor.color);

	return previous;
}, []);

console.log('Array of colours 1: ', arrayOfColors1);
console.log('======================');


//whiteboard question - are parentheses balanced?

//My guess:
function balancedParens(string) {
	let array = string.split('');
	let result = array.reduce((balance, char) => {
		if (char === '(') {
			return ++balance;
		}
		if (char === ')') {
			return --balance;
		}
	}, 0);

	return result;
}

console.log('Balanced(my guess): ', !Boolean(balancedParens('((((()))))')));
console.log('======================');

//Mentor variant:
function balancedParensM(string) {
	return !string.split('').reduce((previous, char) => {
		if (previous < 0) { return previous; } // to cover the case if parenthesis are in wrong order
		if (char === '(') { return ++previous; }
		if (char === ')') { return --previous; }

		return previous; //to skip other symbols
	}, 0);
}

console.log('Balanced(my guess): ', balancedParensM('())'));
console.log('======================');


//Count desks

const desks = [
	{ type: 'sitting' },
	{ type: 'standing' },
	{ type: 'sitting' },
	{ type: 'sitting' },
	{ type: 'standing' }
];

const deskTypes = desks.reduce(function(previous, desk) {
	if (desk.type === 'sitting') { previous.sitting++; }
	if (desk.type === 'standing') { previous.standing++; }

	return previous;
}, { sitting: 0, standing: 0 });

console.log('Desks: ', deskTypes);
console.log('======================');


//Remove duplicates

let someNumbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
	return array.reduce((result, item) => {
		let found = result.find(element => element === item);
		if (!found) {
			result.push(item);
		}
		return result;
	}, [])
}


console.log(unique(someNumbers));