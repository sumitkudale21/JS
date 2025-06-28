// object declare => constructor, literals, singleton


// object literals

// Object.create

const mySym = Symbol()
const user = {
  [mySym]: "mysym",
  name: 'sumit',
  age: '12',
  email: 'abc@exa.com',
  days: [1,2,3,4]
}

console.log(user.age);
console.log(user[mySym]);

let obj = { a: 1, b: 2 };

// Access / modify
obj.a;
obj["b"];
obj.c = 3;
delete obj.b;

// Check
"a" in obj;
obj.hasOwnProperty("c");

// Loop
for (let key in obj) console.log(key, obj[key]);

// Methods
Object.keys(obj);
Object.values(obj);
Object.entries(obj);

// Spread / Destructure
let copy = { ...obj };
let { a, c } = obj;

// With function
obj.sayHi = function() { console.log("Hi"); };
obj.sayHi();













