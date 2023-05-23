// Challenge #1

console.log('===== Constructor Function =====');
// 1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// 2.
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

// 3.
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

// 4.
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw, mercedes);

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();
mercedes.brake();

console.log(Car.prototype);
console.log(bmw.__proto__);

// Challenge #2
console.log('===== ES6 Classes =====');

// 1.
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Accelerated - current speed: ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`Braked - current speed: ${this.speed}`);
  }

  // 2.
  get speedUS() {
    console.log(`Current speed in mi/h: ${this.speed / 1.6}`);
    return this.speed / 1.6;
  }

  // 3.
  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
}

// 4.
const ford = new CarCl('Ford', 120);
console.log(ford);

ford.accelerate();
ford.accelerate();
ford.brake();
ford.accelerate();
ford.brake();

ford.speedUS;
ford.speedUS = 35;
console.log(ford);
