'use strict';

var computers = [{ model: 'Apple', ram: 16 }, { model: 'Acer', ram: 12 }, { model: 'Dell', ram: 24 }];

// Check is every item has valid property
var allComputersCanRun = computers.every(function (computer) {
	return computer.ram >= 16;
});

console.log(allComputersCanRun);
console.log('=====================');
console.log('=====================');

// Check is any of items has valid property
var anyComputersCanRun = computers.some(function (computer) {
	return computer.ram >= 16;
});

console.log(anyComputersCanRun);
console.log('=====================');