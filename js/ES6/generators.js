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
	const dg = yield 'DG';
	const lv = yield 'LV';
	const prada = yield 'Prada';
	const hermes = yield 'Hermes';

	return [dg, lv, prada, hermes];
}

const banchOfBrands = brands();
console.log(banchOfBrands.next('dg t-shirt'));
console.log(banchOfBrands.next('lv t-shirt'));
console.log(banchOfBrands.next('prada pants'));
console.log(banchOfBrands.next('Hermes bag'));
console.log(banchOfBrands.next('Shopping list has been done'));