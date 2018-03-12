//ES5

function getYearES5() {
	var year = new Date().getFullYear();

	return 'Year is: ' + year;
}
console.log(getYearES5());
console.log('======================');


//ES6

function getYearES6() {
	var year = new Date().getFullYear();

	return `Year is: ${year}`; //inside curly braces can be any JS code
}

console.log(getYearES6());
console.log('======================');