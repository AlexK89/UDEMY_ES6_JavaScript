//Find element

const products = [
	{name: 'banana', type: 'fruit', price: 2.4, quantity: 25 },
	{name: 'apple', type: 'fruit', price: 1.3, quantity: 12 },
	{name: 'carrot', type: 'vegetable', price: 2, quantity: 3 },
	{name: 'plume', type: 'fruit', price: 3.1, quantity: 0 },
	{name: 'raspberry', type: 'fruit', price: 2.7, quantity: 20 }
];

const carrot = products.find((product) => {
	return product.name === 'carrot';
});
console.log(carrot);
console.log('===========================');


//Find a specific car

function Car (brand) {
	this.brand = brand;
}

let cars = [
	new Car('BMW'),
	new Car('Opel'),
	new Car('Mercedes'),
	new Car('Volvo'),
	new Car('Ford'),
];

const chosenCar = cars.find((car) => car.brand === 'Opel');

console.log(chosenCar);
console.log('===========================');


//Find post

const posts = [
	{id: 1, post: 'New post'},
	{id: 2, post: 'Old post'}
];

const comment = {postId: 2, text: 'cool stuff'};

function postForComment(posts, comment) {
	return posts.find((post) => post.id === comment.postId)
}

console.log(postForComment(posts, comment));
console.log('===========================');