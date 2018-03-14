// ES5
function CarOld(options) {
	this.title = options.title;
}

CarOld.prototype.drive = () => {
	return 'vroom';
};

const carOld = new CarOld({title: 'Focus'});

console.log(carOld);
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
console.log('=============== \n ES6 examples \n===============');

class Car {
	constructor({title}) { //here we have initialisation on parameters we want to pass
		this.title = title;
	}
	drive() {
		return 'vroom';
	}
}

const car = new Car({title: 'Opel'});


class Opel extends Car {
	constructor({color, steer, title}) {
		super(title); //Car.constructor
		this.color = color;
		this.steer = steer;
	}
	honk() {
		return 'beep';
	}
}

const opel = new Opel({color: 'red', steer: 'left', title: 'Opel'});
console.log(car);
console.log(car.title);
console.log(car.drive());
console.log('===============');
console.log(opel.honk());
console.log(opel.color);
console.log(opel.drive());

//Exercise
class Monster {
	constructor(options) {
		this.health = 100;
		this.name = options.name;
	}
}

class Snake extends Monster {
	bite(snake) {
		return snake.health -= 10;
	}
}

const snake1 = new Snake({name: 'Nagini'});
const snake2 = new Snake({name: 'Snek'});

snake1.bite(snake2);