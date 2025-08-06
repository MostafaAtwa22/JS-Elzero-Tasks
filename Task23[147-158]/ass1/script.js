
class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    Run() {
        return `Car is Running Now`;
    }
    Stop() {
        return `Car Is Stopped`;
    }
}

// Needed Output
let carOne = new Car("MG", 2022, 420000);
let carTwo = new Car("BMW", 2021, 50000);
let carThree = new Car("Marcides", 2012, 400000);
console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`)
console.log(carOne.Run())