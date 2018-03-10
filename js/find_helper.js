'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Find element

var products = [{ name: 'banana', type: 'fruit', price: 2.4, quantity: 25 }, { name: 'apple', type: 'fruit', price: 1.3, quantity: 12 }, { name: 'carrot', type: 'vegetable', price: 2, quantity: 3 }, { name: 'plume', type: 'fruit', price: 3.1, quantity: 0 }, { name: 'raspberry', type: 'fruit', price: 2.7, quantity: 20 }];

var carrot = products.find(function (product) {
	return product.name === 'carrot';
});
console.log(carrot);
console.log('===========================');

//Find a specific car

function Car(brand) {
	this.brand = brand;
}

var cars = [new Car('BMW'), new Car('Opel'), new Car('Mercedes'), new Car('Volvo'), new Car('Ford')];

var chosenCar = cars.find(function (car) {
	return car.brand === 'Opel';
});

console.log(chosenCar);
console.log('===========================');

//Find post

var posts = [{ id: 1, post: 'New post' }, { id: 2, post: 'Old post' }];

var comment = { postId: 2, text: 'cool stuff' };

function postForComment(posts, comment) {
	return posts.find(function (post) {
		return post.id === comment.postId;
	});
}

console.log(postForComment(posts, comment));
console.log('===========================');

// Show admins

var users = [{ id: 1, admin: false }, { id: 2, admin: false }, { id: 3, admin: true }];

var admin = users.find(function (user) {
	return user.admin;
});

console.log(admin);
console.log('===========================');

//find in array by object
var ladders = [{ id: 1, height: 20 }, { id: 3, height: 25 }];

function findWhere(array, criteria) {
	var key = (0, _keys2.default)(criteria)[0];

	return array.find(function (item) {
		return item[key] == criteria[key];
	});
}

console.log(findWhere(ladders, { height: 25 }));