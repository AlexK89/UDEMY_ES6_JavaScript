// Promise without parameters will stuck on padding state
// we need to add "resolve" and "reject" parameters(this is pre-build methods) to make it possible to complete it's own
const promise = new Promise((resolve, reject)=> {
	// here as a result we should call 'resolve()' or 'reject()'
	// resolve();
	reject();
});

console.log(promise);
console.log('=====================');

//if promise succeed we use 'then'

promise
	.then(() => console.log('success'))
	.then(() => console.log('We can use few ".then()" for promise'))
	.catch((error) => console.log('rejected: ', error));