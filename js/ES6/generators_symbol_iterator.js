// Symbol iterators

const testingTeam = {
	lead: 'Amanda',
	tester: 'Luke',
	[Symbol.iterator]: function* () {  //[Symbol.iterator] - shows for of loop how to work with object
		yield this.lead;
		yield this.tester;
	}
};

const engineeringTeam = {
	testingTeam,
	size: 3,
	department: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineer: 'Dave',
	[Symbol.iterator]: function* () {
		yield this.lead;
		yield this.manager;
		yield this.engineer;
		yield* this.testingTeam; // * - is a way to let "for of" loop get inside the testingTeam object
	}
};



const team = [];
for(let member of engineeringTeam) {
	team.push(member);
}
console.log(team);