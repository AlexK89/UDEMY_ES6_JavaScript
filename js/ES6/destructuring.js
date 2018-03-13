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

const { type } = expenseNew;
const { amount } = expenseNew;