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

//Array destructuring

const companies = [
	'Google',
	'Facebook',
	'Apple',
	'Microsoft'
];

const [ name ] = companies; //Google, the first item.
const [ name1, name2, name3, ] = companies; //We can get more names;
console.log(name1, name2, name3);

const [ name5, name6, , name7 ] = companies; //We can skip names;
console.log(name5, name6, name7);

const [ name10, ...rest ] = companies;
console.log(rest); //return all except first one;

const {length} = companies;
console.log(length); //array length


