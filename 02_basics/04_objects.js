function Car(model, year) {
  this.model = model;
  this.year = year;
}

Car.prototype.getInfo = function() {
  return `${this.model} - ${this.year}`;
};

const c1 = new Car("Honda", 2020);
const c2 = new Car("Toyota", 2022);

console.log(c1.getInfo()); // Honda - 2020

// ************************



const course = {
  coursename: "js",
  price: 999,
  courseteacher: "sumit"
}

// course.courseteacher

const {courseteacher: ct} = course
console.log(ct);

