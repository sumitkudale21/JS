// const name = "sumit"
// const repoCount = 10

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count ${repoCount}`); // modern and correct method also called string interpolution

// const gameName = new String('sumit')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

// const newString = gameName.substring(0,3)
// console.log(newString);

// const anotherString = gameName.slice(-5,1)
// console.log(anotherString);

// console.log("    with space   ");
// console.log("    no space   ".trim());

// console.log("abcdefg".replace('b','r'));
// console.log("abcdefg".includes('f'));

// console.log('split'.split(''));


// ✅ String methods in JavaScript

let str = "Hello World";

// Length
str.length;                          // 11

// Access character
str.charAt(0);                       // "H"
str[0];                              // "H"

// Search
str.indexOf("World");                // 6
str.lastIndexOf("l");                // 9
str.includes("Hello");               // true
str.startsWith("Hel");              // true
str.endsWith("ld");                 // true
str.search("World");                // 6

// Extract
str.slice(0, 5);                     // "Hello"
str.substring(0, 5);                 // "Hello"
str.substr(0, 5);                    // "Hello" (deprecated)

// Modify
str.toUpperCase();                  // "HELLO WORLD"
str.toLowerCase();                  // "hello world"
str.trim();                         // removes whitespace
str.trimStart();                    // trim only start
str.trimEnd();                      // trim only end
str.replace("World", "JS");         // "Hello JS"
str.replaceAll("l", "*");           // "He**o Wor*d"
str.concat("!", "!!");              // "Hello World!!!"
str.padStart(15, ".");              // "....Hello World"
str.padEnd(15, ".");                // "Hello World...."
str.repeat(2);                      // "Hello WorldHello World"

// Split / Convert
str.split(" ");                     // ["Hello", "World"]
[...str];                           // Spread to array

// Match & Regex
str.match(/l/g);                    // ["l", "l", "l"]
str.matchAll(/l/g);                 // Iterator of matches

// Code info
str.charCodeAt(0);                  // 72
String.fromCharCode(72);           // "H"

// Template Literals
let name = "Sumit";
let greet = `Hi ${name}`;          // "Hi Sumit"
