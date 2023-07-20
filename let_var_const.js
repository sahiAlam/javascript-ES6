// ******** var ********
// 1. can re declare & re assign
// 2. Function scope
// 3. Hoisting is possible
// 4. Globally available on window object

// ****** let ******
// 1. can't re declare but re assign
// 2. Block scope
// 3. Hoisting not possible

// ****** const *****
// 1. can't re declare not re assign
// 2. Block scope
// 3. Hoisting not possible
// 4. but can access data from object in outer scope

var num = 10;
var num = 16; //redeclare
console.log(num);

if (num >= 16) {
  // not block scope
  var isElegeble = true;
}
console.log(isElegeble);

function register() {
  //function scope
  var username = "Khan";
  var password = "secrete";
}

console.log(myName); // hoisting
var myName = "sahil khan"; //global scope
console.log(myName);

let num2 = 30;
num2 = 40;
console.log(num2);

if (num2 > 30) {
  let myAge = "30 +";
}

const myConstant = "Khan";

const studentData = {
  name: "Sahi Alam Khan",
  age: 15,
};

console.log(studentData.name);
