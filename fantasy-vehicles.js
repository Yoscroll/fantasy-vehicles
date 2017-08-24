class Vehicle{
	constructor(make, type){
		this.make = make;
		this.type = type;
	}
	vehicleDetails(){
		return `Your vehicle is a ${this.color} ${this.type}, made by ${this.make}`;
	}
	vehicleColor(color){
		this.color = color;
	}
}
class SuperCar extends Vehicle{
	constructor(make, type, topSpeed){
		super(make,type)
		this.topSpeed= topSpeed;
	}
	superCarDetails(){
		return `Your vehicle is a ${this.cost} ${this.color} ${this.type}, made by ${this.make}, and has a top speed of ${this.topSpeed}`;
	}
	priceTag(cost){
		this.cost = cost;
	}
}

class Motorcycle extends Vehicle{
	constructor(make, type, cost){
		super(make,type);
		this.cost = cost;
	}
	bikeSpeed(speed){
		this.topSpeed = speed;
	}
	bikeDetails(){
		return `Your motorcycle is a ${this.cost} ${this.color} ${this.type}, made by ${this.make}, and has a top speed of ${this.topSpeed}`;
	}
}
let car = new SuperCar('Toyota','Highlander','500mph');
car.vehicleColor('black');
car.priceTag('$30k');
console.log(car.superCarDetails());

let bike = new Motorcycle('KTM', 'KTM 1290 Super Duke GT', '$20k');
bike.vehicleColor('black');
bike.bikeSpeed('200mph');
console.log(bike.bikeDetails());