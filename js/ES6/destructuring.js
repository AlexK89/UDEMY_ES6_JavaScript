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

//SignUP real case
// if we use object as a parameter, we can easily de-structure it

function signup({userName, userPassword, userEmail, userCity}) {
	//do some logic
}

const user = {
	userName: 'myname',
	userPassword: 'mypassword',
	userEmail: 'myemail@google.com',
	userCity: 'London'
};
signup(user);

//Coordinates real case

const points = [
	[1, 6],
	[5, 15],
	[8, 25],
];

const listOfPoints = points.map(([x, y]) => { return {x, y} }); //we can pass not pair of numbers, but destructures it here


console.log('==================');
console.log(listOfPoints);

//Excercise 1

const classes = [
	[ 'Chemistry', '9AM', 'Mr. Darnick' ],
	[ 'Physics', '10:15AM', 'Mrs. Lithun'],
	[ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
	return {subject, time, teacher};
});
console.log(classesAsObject);


//Excercise 2
//Use array destructuring, recursion, and the rest/spread operators to create a function 'double'
// that will return a new array with all values inside of it multiplied by two.
const numbers = [1, 2, 3];

function double( [first, ...rest] ) {
	return !first ? [] : [first*2, ...double(rest)];
}
