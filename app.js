// JavaScript Basics Lesson 1. The console.

//The console is a tool that developers use to record the output of their JavaScript programs.
//Enter you favorite food and basketball team using the console.

console.log('barbequed chicken');
console.log("Golden State Warriors");

//Lesson 2. Primitive data types.
//Use the console to enter 4 primitive data types: string, number, boolean(true or false) & null

console.log("Meet me in St. Louis!");
console.log(2018);
console.log(false);
console.log(null);

//Lesson 3. Mathe operators. Use the console to add(+), subtract(-), divide(/) and multiply.

console.log(1968 + 49);
console.log(2018 - 1969);
console.log(77 / 11);
console.log(68 * 3.5);

//Lesson 4. The length property. The length property will tell you how many characters your string has.

console.log("I feel like dancing!".length);
console.log("I love Glenny!".length);

//Lesson 5. Built-in Methods. JS has certain buiilt in methods. Here is the list: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
// Use the console to enter 3 types: Make something all upper and lower case. Remove all white spaces.

console.log("michael jackson".toUpperCase());
console.log("GET MONEY!".toLowerCase());
console.log(" No space for negative energy here! ".trim());


//Lesson 5. JS Libraries. JavaScript libraries contain methods that you can call without creating an instance.
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

//Lesson 6. Declaring variables. const and let are E6 ways.
var city = "Boston";
const year = 1977;
let myGirl = "Glenny Gomez";

city = "St. Louis";
myGirl = "Glenny Gomez DeDodson";

console.log(city);
console.log(year);
console.log(myGirl);

//*Note. A var and a let can be reassigned different values but a const can't.

//Lesson 7. Undefined variables
let notDefined;
console.log(notDefined);

var valueless;
console.log(valueless);

//Lesson 8. Using math operators with varibles
let x = 10;
console.log(x + 5);

var i = 17;
i++;
console.log(i);

let a = 45;
console.log(a / 5);

var b = 51;
b--;
console.log(b);

let z = 9;
z--;
console.log(z * 5);

//Lesson 9. String Interpolation
var myName = "Woody";
var myTown = "Charleston, Mississippi";
console.log("My name is " + myName + ". I was born in " + myTown + ".");

let person = "Mudbone";
let town = "Tupelo, Misssissippi";
console.log(`My name is ${person}. I was born in ${town}.`);




