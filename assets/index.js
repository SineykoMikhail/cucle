// for(let counter = 25;counter >= 0;counter--) {
//   console.log(counter);
// }

// let counter = 10;
// while (counter <= 45) {
//   console.log(counter);
//   counter += 5;
// }

// let sum = 0;
// for (let num = 1; num <= 100; num++) {
//   sum += num;
// }
// alert(sum);

// while (true) {
//   let answer = prompt("Ведите ответ 2+2*2");
//   if (answer === 6) {
//     break;
//   }
// }
// let nresult = "\n";
// let number2 = 1;

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j < 11; j++) {
//     result += i * j + "";
//   }
//   console.log((result += "\n"));
// }

// const number = [1, 2, 3, 4, 5, 6, 7 ];
// number.forEach(callback);
// function callback(currentName) {
//   console.log(currentName ** 2);
// }

function Cars(
  manufacture,
  model,
  color,
  releaseYer,
  maxSpeed,
  fuelConsumption,
  volume
) {
  this.manufacture = manufacture;
  this.model = model;
  this.color = color;
  this.releaseYer = releaseYer;
  this.speed = 0;
  this.maxSpeed = maxSpeed;
  this.fuelConsumption = fuelConsumption;
  this.volume = volume;
  this.__proto__ = carPrototype;
}
const carPrototype = new CarPrototype();
function CarPrototype() {
  this.accelerate = function () {
    return this.speed = this.speed +10;
  };
  this.braking = function () {
    return (this.speed -= 10);
  };
  this.stoped = function () {
    return (this.speed = 0);
  };
}

const cars1 = new Cars("Tesla", "model X", "red", "2021", "200", "30", "60");

