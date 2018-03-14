// ES5
function CarOld(options) {
	this.title = options.title;
}

CarOld.prototype.drive = () => {
	return 'vroom';
};

const car = new CarOld({title: 'Focus'});

console.log(car);
console.log('===============');

function ToyotaOld(options) {
	CarOld.call(this, options); //extend by CarOld functionality
	this.color = options.color;
}

ToyotaOld.prototype = Object.create(CarOld.prototype);
ToyotaOld.prototype.constructor = ToyotaOld;

ToyotaOld.prototype.honk = () => {
	return 'beep';
};
const toyotaOld = new ToyotaOld({color: 'red', title: 'daily driver'});

console.log(toyotaOld);
console.log(toyotaOld.honk());
console.log(toyotaOld.drive());
console.log('===============');


//ES6