//ES5

var expenseOld = {
	type: 'business',
	amount: '45$'
};

// var type = expenseOld.type;
// var amount = expenseOld.amount;

//ES6

const expenseNew = {
	type: 'business',
	amount: '45$'
};

const { type, amount } = expenseNew;

console.log(type, amount);

const savedFile = {
	extension: '.jpg',
	name: 'repost',
	size: 10
};

function fileSummary({extension, name, size}) {
	return `Format: ${extension}, name: ${name}, size: ${size}`;
}

console.log(fileSummary(savedFile));