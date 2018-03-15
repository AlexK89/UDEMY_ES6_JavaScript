// "For of" loop

const colors = ['red', 'blue', 'pink', 'green'];

for (let color of colors) {
	console.log(color);
}
console.log('==================');

function* numbers() { //* - is a sign for generators
	yield 'cash';

	yield 'less cash';
}

const gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next('0 cash'));