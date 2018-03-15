// "For of" loop

const colors = ['red', 'blue', 'pink', 'green'];

for (let color of colors) {
	console.log(color);
}
console.log('====================================');

function* numbers() { //* - is a sign for generators
	yield 'cash';

	const greceries = yield 'less cash';

	return greceries;
}

const gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next('0 cash'));

console.log('====================================');

function* brands() {
	yield 'DG';
	yield 'LV';
	yield 'Prada';
	yield 'Hermes';
}

const banchOfBrands = brands();
console.log(banchOfBrands.next());
console.log(banchOfBrands.next());
console.log(banchOfBrands.next());
console.log(banchOfBrands.next());
console.log(banchOfBrands.next());

const allBrands = [];

for(let brand of brands()){
	allBrands.push(brand);
}
console.log('All brands: ', allBrands);