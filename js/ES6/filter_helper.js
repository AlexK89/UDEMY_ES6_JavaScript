const products = [
	{name: 'banana', price: 2.4 },
	{name: 'apple', price: 1.3 },
	{name: 'orange', price: 2 },
	{name: 'plume', price: 3.1 },
	{name: 'raspberry', price: 2.7 }
];

const priceUnderTwoPounds = products.filter((product) => {
	return product.price >= 2.4
});

console.log(priceUnderTwoPounds);