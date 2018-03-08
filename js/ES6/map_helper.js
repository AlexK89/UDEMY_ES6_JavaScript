//Double numbers

const numbers = [1, 2, 3, 4, 5, 6, 7];
const doubled = numbers.map((number) => {
	return number * 2;
});

console.log(doubled);
console.log('============================');

//Map for array of objects

const cars = [
	{ model: 'BMW', price: 'expensive' },
	{ model: 'Mini', price: 'cheap' }
];
console.log(cars.price);
const carPrices = cars.map((car)=>{
	return car.price;
});
console.log(carPrices);
console.log('============================');

// Calculate speed

const trips = [
	{ distance: 34, time: 10 },
	{ distance: 90, time: 50 },
	{ distance: 59, time: 25 }
];
const speeds = trips.map((trip) => {
	return trip.distance/trip.time;
});

console.log(speeds);
console.log('============================');


let paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
	let properties = array.map((arrayItem) => {
		return arrayItem[property];
	});
	
	console.log(properties);

	return properties;
}
pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];