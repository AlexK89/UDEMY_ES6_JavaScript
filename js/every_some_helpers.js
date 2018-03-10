const computers = [{ model: 'Apple', ram: 16 }, { model: 'Acer', ram: 12 }, { model: 'Dell', ram: 24 }];

// Check is every item has valid property
let allComputersCanRun = computers.every(computer => computer.ram >= 16);

console.log(allComputersCanRun);
console.log('=====================');

// Check is any of items has valid property
let anyComputersCanRun = computers.some(computer => computer.ram >= 16);

console.log(anyComputersCanRun);
console.log('=====================');