class Car {
    constructor(model, speed) {
        this.model = model;
        this.speed = speed;
    }

    aceleration(spd) {
        this.speed = speed;
        console.log("new speed is ", this.speed);
    }
}


var CarA = function (model, speed) {
    this.model = model;
    this.speed = speed;
    this.aceleration = function (spd) {
        this.speed = spd;
        console.log("new speed is ", this.speed);
    }
};

var car3 = {
    model: "audi46",
    speed: 60,
    aceleration : function(spd) {
        this.speed = spd;
        console.log("new speed is ", this.speed);
    }
};

var car1 = new Car("audiA4", 70);
var car4 = new Car("audiA4", 80);
var car2 = new CarA("audiA8", 90);


function visualitzar() {
    console.log(car1);
    console.log(car2);
    console.log(car3);
    console.log(car4);

    car1.aceleration(130);
    car2.aceleration(140);
    car3.aceleration(180);
    car4.aceleration(200);
    
    console.log(car1);
    console.log(car2);
    console.log(car3);
}
