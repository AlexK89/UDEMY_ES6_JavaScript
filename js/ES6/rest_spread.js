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
