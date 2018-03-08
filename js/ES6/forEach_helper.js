//Old fashion way
var colors = ['green', 'red', 'blue'];

for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}
console.log('==========================');

//New way of doing

colors.forEach(function (color) {
	console.log('For each loop: ', color);
});
console.log('==========================');

//Sum up array's numbers

let numbers = [3, 5, 2, 6, 2, 6, 9];
let sum = 0;

function summingNumbers(number) {
	sum += number;
}
numbers.forEach(summingNumbers);

//Print result
console.log('Total number is: ', sum);
console.log('==========================');

//Calculate areas

const images = [
	{ height: 10, width: 30 },
	{ height: 20, width: 90 },
	{ height: 54, width: 32 }
];
let areas = [];

function calcArea(image) {
	return image.height * image.width;
}

images.forEach(function (image) {
	let area = calcArea(image);

	areas.push(area);
});

console.log('Images areas: ', areas);
console.log('==========================');