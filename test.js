const CarMethods = require('./carMethods');

const myCar = new CarMethods('Mustang', 'Ford', 'Red', 'Gasoline', 4, 2, 4, 250, true, true, true, true, 'GT', 2020, 50000, false, false);

console.log('Car Age:', myCar.getAge());
console.log('Car Price:', myCar.getPrice());
console.log('Car Summary:', myCar.getSummary());
