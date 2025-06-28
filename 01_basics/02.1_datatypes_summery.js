// Primitive 

// 7 types : String, Number, Boolean, null, Bigint, Undefined, Symbol

// JavaScript is a dynamically typed language.

// ✅ What That Means:
// 🔹 Dynamically Typed
// Type is determined at runtime, not during code writing (compile time).

// You don’t need to declare variable types explicitly.

// A variable can hold values of different types at different times.

// const id = Symbol('123')
// const anotherid = Symbol('123')
// console.log(id === anotherid); // false


// Reference(Non-Primitive)

// Array, Objects, Functions

const array = [12,12,23];
const object = {
  obj1: 1,
  obj2: "two"
}

const myFunction = function(){
  console.log("hoooo");
}

// console.log(array);
// console.log(object);
// console.log(myFunction());

// ********************* Memory *********************

// Stack {Primitive} => copy
// , Heap (Non=Primitive) => reference
// JavaScript automatically frees memory in the heap when objects are no longer reachable (via garbage collection).

// |                | Stack                        | Heap                        |
// | -------------- | ---------------------------- | --------------------------- |
// | Stores         | Simple stuff (numbers, text) | Big stuff (objects, arrays) |
// | Fast?          | Very fast                    | Slower                      |
// | How it stores? | Copies values                | Shares reference (pointer)  |
// | When used?     | For basic values             | For complex data            |

let x = 5;
let y = x;
y = 10;
console.log(x); // 👉 5

let person1 = { name: "Sumit" };
let person2 = person1;
person2.name = "Karan";
console.log(person1.name); // 👉 Karan


