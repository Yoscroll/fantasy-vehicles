class Vehicle{
	constructor(make, color, type){
		this._make = make;
		this._color = color;
		this._type = type;
	}
	vehicleDetails(){
		return `Your vehicle is a ${this._color} ${this._type}, made by ${this._make}`;
	}
	vehicleColor(color){
		this._color = color;
	}
}
class SuperCar extends Vehicle{
	constructor(make, color, type, topSpeed, cost){
		super(make, color, type)
		this._topSpeed= topSpeed;
		this._cost= cost;
	}
	superCarDetails(){
		return `Your vehicle is a ${this._cost} ${this._color} ${this._type}, made by ${this._make}, and has a top speed of ${this._topSpeed}`;
	}
	priceTag(cost){
		this._cost = cost;
	}
}

class Motorcycle extends Vehicle{
	constructor(make, color, type, topSpeed, cost){
		super(make,color, type);
		this._cost = cost;
		this._topSpeed=topSpeed;
	}
	bikeSpeed(speed){
		this._topSpeed = speed;
	}
	bikeDetails(){
		return `Your motorcycle is a ${this._cost} ${this._color} ${this._type}, made by ${this._make}, and has a top speed of ${this._topSpeed}`;
	}
}
let car = new SuperCar('Toyota','purple','Highlander','500mph','$66k');
car.vehicleColor('black');
car.priceTag('$30k');
console.log(car.superCarDetails());

let bike = new Motorcycle('KTM', 'red','KTM 1290 Super Duke GT','600mph', '$20k');
bike.vehicleColor('black');
bike.bikeSpeed('200mph');
console.log(bike.bikeDetails());