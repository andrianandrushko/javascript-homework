class Car {
    constructor(model, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }

    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }

    increaseMaxspeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        if (newValue > 2022) {
            this.yearOfManufacture = newValue;
        }
    }

    addDriver(driver) {
        this.driver = driver;
    }
}


let car1 = new Car('BMW', 2020, 250, 3.0);

console.log(car1);

car1.drive();
car1.info();

car1.increaseMaxspeed(50);
console.log(car1.maxSpeed);

car1.changeYear(2024);
console.log(car1.yearOfManufacture);

car1.addDriver({ name: "Alex", age: 30 });
console.log(car1);