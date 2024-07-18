const Vehicle = require('./vehicleClass');

class Car extends(Vehicle) {
    constructor (name,  manufacturer, color, fuelType, numberOfWheels, numberOfDoors, numberOfSeats, maxSpeed, isAutomatic, isInsured, isRegistered, isWorking, model, year, price, isUsed, isDamaged)
    {
            super(name,  manufacturer, color, fuelType, numberOfWheels, numberOfDoors, numberOfSeats, maxSpeed, isAutomatic, isInsured, isRegistered, isWorking);
            this.model= model;
            this.year = year;
            this.price = price;
            this.isUsed = isUsed;
            this.isDamaged = isDamaged;
    }
    ffgf()
    {return console.log("car class sucessfully created")};
}


test2 = new Car ("name",  "manufacturer", "color", "fuelType", "numberOfWheels", "numberOfDoors", "numberOfSeats", "maxSpeed", "isAutomatic", "isInsured", "isRegistered", "isWorking", "model", "year", "price", "isUsed", "isDamaged")
test2.ffgf()

module.exports = Car;
