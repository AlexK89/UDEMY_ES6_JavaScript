const products = [
	{name: 'banana', type: 'fruit', price: 2.4, quantity: 25 },
	{name: 'apple', type: 'fruit', price: 1.3, quantity: 12 },
	{name: 'carrot', type: 'vegetable', price: 2, quantity: 3 },
	{name: 'plume', type: 'fruit', price: 3.1, quantity: 0 },
	{name: 'raspberry', type: 'fruit', price: 2.7, quantity: 20 }
];

//Filter by price
const priceUnderTwoPounds = products.filter((product) => {
	return product.price >= 2.4
});

console.log(priceUnderTwoPounds);
console.log('===========================');

//filter by availability and type

const availableFruits = products.filter((product) => {
	return product.type === 'fruit' && product.quantity > 0;
});

console.log(availableFruits);
console.log('===========================');