class Vehicle{
	constructor(make, color, type){
		this._make = make;
		this._color = color;
		this._type = type;
	}
	get vehicleDetails(){
		return `Your vehicle is a ${this._color} ${this._type}, made by ${this._make}`;
	}
	set vehicleColor(color){
		this._color = color;
	}
}
class SuperCar extends Vehicle{
	constructor(make, color, type, topSpeed, cost, year){
		super(make, color, type)
		if (typeof(speed)==="number"){
			this._speed = speed;
		}
		else{
			throw new TypeError('Cost entered must be a number');
		}
		this._cost = cost;
		this._year = year;
	}
	get superCarDetails(){
		return `Your vehicle is a $${this._cost}k ${this._color} ${this._year} ${this._type}, made by ${this._make}, and has a top speed of ${this._topSpeed}mph`;
	}
	set priceTag(cost){
		if (typeof(cost)==="number"){
			this._cost = cost;
		}
		else{
			throw new TypeError('Cost entered must be a number');
		}
	}
	get carAge(){
		return "Your car is " +(2017-this._year)+" year(s) old";
	}
	set year(year){
		if (typeof(year)==="number"){
			this._year = year;
		}
		else{
			throw new TypeError('Year entered must be a number');
		}
	}
}

class Motorcycle extends Vehicle{
	constructor(make, color, type, topSpeed, cost){
		super(make,color, type);
		if (typeof(cost)==="number"){
			this._cost = cost;
		}
		else{
			throw new TypeError('Cost entered must be a number');
		}
		this._topSpeed = topSpeed;
	}
	set bikeSpeed(speed){
		if (typeof(topSpeed)==="number"){
			this._topSpeed = topSpeed;
		}
		else{
			throw new TypeError('Cost entered must be a number');
		}
	}
	get bikeDetails(){
		return `Your motorcycle is a $${this._cost}k ${this._color} ${this._type}, made by ${this._make}, and has a top speed of ${this._topSpeed}mph`;
	}
}
let car = new SuperCar('Toyota','purple','Highlander',500,66 ,2002);
car.vehicleColor = "black";
car.priceTag = "c";
car.year= 2005;
console.log(car.superCarDetails);
console.log(car.carAge);

let bike = new Motorcycle('KTM', 'red','KTM 1290 Super Duke GT',600, 20, 1980);
bike.vehicleColor = 'black';
bike.bikeSpeed =200;
console.log(bike.bikeDetails);