// array 
const myarr = [0, 1, 2, 3, 4, 5, true, 'sumit']
// const myarr2 = new Array(1,2,3,4)
// console.log(myarr2);

// console.log(myarr);
// console.log(myarr[0]);

// Array method

// myarr.push(2)
// myarr.push(32)
// myarr.pop()

// myarr.unshift(8)
// myarr.shift()
// console.log(myarr.includes(7));
// console.log(myarr.indexOf(true));

// const newArr = myarr.join()


// console.log();


// slice, splice

// Add/Remove
let fruits = ["apple", "banana", "mango"];
fruits.push("grape");       // add at end
fruits.pop();               // remove from end
fruits.unshift("kiwi");     // add at start
fruits.shift();             // remove from start

// Search
fruits.includes("apple");   // true
fruits.indexOf("banana");   // 1

// Modify
let joined = fruits.join(", ");       // "apple, banana"
let sliced = fruits.slice(1, 3);      // ["banana", "mango"]
let removed = fruits.splice(1, 1);    // remove 1 element at index 1

// Sorting
let nums = [4, 1, 3, 2];
nums.sort();                          // [1, 2, 3, 4]
nums.reverse();
