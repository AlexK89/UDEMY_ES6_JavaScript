'use strict';

var products = [{ name: 'banana', type: 'fruit', price: 2.4, quantity: 25 }, { name: 'apple', type: 'fruit', price: 1.3, quantity: 12 }, { name: 'carrot', type: 'vegetable', price: 2, quantity: 3 }, { name: 'plume', type: 'fruit', price: 3.1, quantity: 0 }, { name: 'raspberry', type: 'fruit', price: 2.7, quantity: 20 }];

//Filter by price
var priceUnderTwoPounds = products.filter(function (product) {
	return product.price >= 2.4;
});

console.log(priceUnderTwoPounds);
console.log('===========================');

//filter by availability and type

var availableFruits = products.filter(function (product) {
	return product.type === 'fruit' && product.quantity > 0;
});

console.log(availableFruits);
console.log('===========================');

// Filter comment by Post id

var post = { id: 2, title: 'Hello world' };

var comments = [{ postId: 2, content: 'Awesome' }, { postId: 4, content: 'cool' }, { postId: 2, content: 'Ehhh' }];

function postFilter(post, comments) {
	return comments.filter(function (comment) {
		return comment.postId === post.id;
	});
}

console.log(postFilter(post, comments));
console.log('===========================');

//Reject filter
// This is a hard one!  Create a function called 'reject'.  Reject should work in the opposite way of 'filter' -
// if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.
function reject(array, iteratorFunction) {
	return array.filter(function (item) {
		return !iteratorFunction(item);
	});
}

console.log(reject);
console.log('===========================');