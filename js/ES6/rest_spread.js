function addNumbers(numbers = [0]) {
	return numbers.reduce((sum, number) => sum + number, 0)
}

console.log(addNumbers([1,2,3,4,5]));

//REST
function addNumbersNew(...numbers) { //...numbers put all your arguments into the array
	return numbers.reduce((sum, number) => sum + number, 0)
}

console.log(addNumbersNew(1,2,3,4,5)); // list of arguments

//Spread
const defaultColors = ['red', 'green'];
const userColors = ['blue', 'pink'];
const colorPallette = ['yellow', ...defaultColors, ...userColors]; //concat method can'' do concat arrays and strings

console.log(colorPallette);


//Validation cases

function validationShopingList(...list) {
	if (list.indexOf('milk') < 0) {
		return ['milk', ...list];
	}
	return list;
}
console.log(validationShopingList('bred', 'butter', 'milk','tomatoes', 'cheese'));


//Math library

const Mathlib = {
	calculateProduct(...rest) {
		console.log('Rest: ', ...rest);
		return this.multiply(...rest);
	},
	multiply(a, b) {
		return a * b;
	}
};

console.log(Mathlib.calculateProduct(4, 6));
console.log(Mathlib.multiply(4, 6));