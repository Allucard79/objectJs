'use strict'; 

function Phone(brand, price, color, cpu, camera) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.cpu = cpu;
    this.camera = camera;
}

Phone.prototype.printInfo = function() {
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ',  the price is ' + this.price + ', cpu is ' + this.cpu + ' and camera is ' + this.camera + '.');
}

var SamsungGalaxyS8 = new Phone('Samsung','3500PLN','Silver','Snapdragon 835','12MP');
var iPhone8 = new Phone('Apple','3200PLN','Black','A11 Bionic','12MP');
var onePlusOne = new Phone('One','1500PLN','Gold','Snapdragon 801','13MP');

Phone.prototype.Info = function() {
    console.log("Brand: " + this.brand);
    console.log("Price: " + this.price);
    console.log("Color: " + this.color);
    console.log("CPU: " + this.cpu);
    console.log("Camera: " + this.camera);
}

iPhone8.Info();


iPhone8.printInfo();
SamsungGalaxyS8.printInfo();
onePlusOne.printInfo();