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
let cool = new SuperCar('Toyota','Highlander','500mph');
cool.vehicleColor("black");
cool.priceTag("$30k");
console.log(cool.superCarDetails());