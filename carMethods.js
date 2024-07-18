const Car = require('./carClass');

class CarMethods extends Car {
    constructor(name, manufacturer, color, fuelType, numberOfWheels, numberOfDoors, numberOfSeats, maxSpeed, isAutomatic, isInsured, isRegistered, isWorking, model, year, price, isUsed, isDamaged)

    {
        super(name,  manufacturer, color, fuelType, numberOfWheels, numberOfDoors, numberOfSeats, maxSpeed, isAutomatic, isInsured, isRegistered, isWorking, model, year, price, isUsed, isDamaged);

    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }

    getPrice() {
        return this.price;
    }

    getSummary() {
        return `Car Summary:  ${this.year}, Price: $${this.price}`;
    }
}

module.exports = CarMethods;
