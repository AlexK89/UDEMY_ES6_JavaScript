'use strict';

//Double numbers

var numbers = [1, 2, 3, 4, 5, 6, 7];
var doubled = numbers.map(function (number) {
	return number * 2;
});

console.log(doubled);
console.log('============================');

//Map for array of objects

var cars = [{ model: 'BMW', price: 'expensive' }, { model: 'Mini', price: 'cheap' }];
console.log(cars.price);
var carPrices = cars.map(function (car) {
	return car.price;
});
console.log(carPrices);
console.log('============================');

// Calculate speed

var trips = [{ distance: 34, time: 10 }, { distance: 90, time: 50 }, { distance: 59, time: 25 }];
var speeds = trips.map(function (trip) {
	return trip.distance / trip.time;
});

console.log(speeds);
console.log('============================');

var paints = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
	var properties = array.map(function (arrayItem) {
		return arrayItem[property];
	});

	return properties;
}
pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];