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

const techCompanies = [
	'Google',
	'Facebook',
	'Apple',
	'Microsoft'
];

const [ name ] = techCompanies; //Google, the first item.
const [ name1, name2, name3, ] = techCompanies; //We can get more names;
console.log(name1, name2, name3);

const [ name5, name6, , name7 ] = techCompanies; //We can skip names;
console.log(name5, name6, name7);

const [ name10, ...rest ] = techCompanies;
console.log(rest); //return all except first one;

const {length} = techCompanies;
console.log(length); //array length


const companies = [
	{name: 'Google', locations: 'Mountain view'},
	{name: 'Facebook', locations: 'Menlo Park'},
	{name: 'Uber', locations: 'San Francisco'},
];

const [{ locations }] = companies;

console.log(locations);


//Walking directions
const Google = {
	offices: ['Ukraine', 'UK', 'USA', 'Canada']
};

const { offices: [office] } = Google;
console.log(office);