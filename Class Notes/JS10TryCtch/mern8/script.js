// Variables
// Operators
// Conditional Stmt if-else
// Iterative Stmt loops
// Functions
// Array - methods imm/mu
// Object
// rest/spread ...
// exception handling
// AJAX
// Promises - async await

// SYNC AND ASYNC BEHAVIOUR OF JS
// setTimeout(() => {
//     console.log("Helloo...");
// }, 2000);

// var counter = 0;
// var c = setInterval(() => {
//     console.log(counter);
//     counter++;
//     if (counter > 5) {
//         clearInterval(c);
//         console.log("Stopped...");
//     }
// }, 1000);

// JS by default sync
// Async feature of JS is Handler By Browser(Web Api)
// with the help of event loop async data is transferred in JS from Web Api

// Handling Error in Sync code of Js
try {
    var a = 12;
    var b = 23;
    var c = a + b;
    if (c % 2 !== 0) {
        throw TypeError("Odd Values Not Allowed");
    }
    console.log(c);
    console.log("heloooo");
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
console.log("Hello World");
