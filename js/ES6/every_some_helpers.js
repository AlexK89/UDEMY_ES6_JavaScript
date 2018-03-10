const computers = [
	{model: 'Apple', ram: 16},
	{model: 'Acer', ram: 12},
	{model: 'Dell', ram: 24},
];

// Check is every item has valid property
let allComputersCanRun = computers.every(computer => computer.ram >= 16);

console.log(allComputersCanRun);
console.log('=====================');
console.log('=====================');

// Check is any of items has valid property
let anyComputersCanRun = computers.some(computer => computer.ram >= 16);

console.log(anyComputersCanRun);
console.log('=====================');

// Validate form
function Field(value) {
	this.value = value;
}

Field.prototype.validate = function () {
	return this.value.length > 0;
};

const username = new Field('Alexandr');
const password = new Field('12345');
const birthday = new Field('01/01/2000');

const fields = [username, password, birthday];

const valid = fields.every(field => field.validate());
console.log('Valid: ', valid);
console.log('=====================');
