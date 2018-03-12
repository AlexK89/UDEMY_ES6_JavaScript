const add = (a, b) => a + b;

console.log(add(2,3));

//double array

const numbers = [1,2,3,4];
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);

//Team

const team = {
	members: ['Jill', 'Bill', 'Alex'],
	teamName: 'Adventures',
	teamSummary: function() {
		return this.members.map(member => `${member} is in ${this.teamName}`); // '=>' here is lexical this
	}
};

console.log(team.teamSummary());