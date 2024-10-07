// This variable is changed immediately after declaration so I use var. 
let fullName = "John Doe";
// If const this variable would not be allowed to change value from "John Doe" to "Jane Doe".
fullName = "Jane Doe";
console.log(fullName);

// I used const here because the variable does not change, also the variable is used as part of the codes argument.  
const age = 30;
if (age > 18) {
  // let because the variable will only be used within this block of code. 
  let adult = true;
  console.log(adult);
}

// const prevents reassigning of the variable while still allowing for you to add, remove, or change of array elements. 
const loopArray = [];
// let because the value of the variable is being reassigned after each iteration of loop. 
for (let i = 0; i < 5; i++) {
  loopArray.push(i);
}
console.log(loopArray);

// I would use let because the value of the variable is being reaassigned.
let MAXIMUM = 100;
MAXIMUM = 200;

// this is an array so we want the name 'colors' to refer to the array colors. Values will still be added, removed, and edited with no issue with this array as a constant. Generally arrays are always declared as a constant. 
const colors = ["Red", "Green", "Blue"];
colors = ["Yellow", "Pink", "Purple"];
console.log(colors);