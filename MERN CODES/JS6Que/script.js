// var name = prompt("enter your name");
// var age = prompt("enter ypur age")
// console.log(`hello ${name},your age is ${age} old`)

// var a = +prompt("enter no 1");
// var b = +prompt("enter no 1");
// var c = +prompt("enter no 1");
// if (a===b && b===c && c===a) {
//     console.log("all inputs are equal");
// }
// else if (a===b||b===c||c===a) {
//     console.log( "Two inputs are equal");
// }
// else {
//     console.log("  no inputs are equal");
// }

// var int1 = +prompt("enter no 1");
// var int2 = +prompt("enter no 2");
// // var int3 = +prompt("enter no 3");
// if (int1>int2) {
//     console.log(int1 + "is greater");
// }
// else (int1<int2) {
//     console.log(int2 + "is greater");
// }

// var a = +prompt("enter num ");

// if (a === 0) {
//     console.log("nither even nor odd");
// }
// else if (a % 2 === 0) {
//    console.log("even");
// }
// else {
//     console.log("odd");
// }

var age = +prompt("enter age");
var name = prompt("enter name");
if (age < 18) {
    var diff = 18 - age;
    console.log("your name is" + name + "your age is " + age + "you are not eligible");
    console.log(`you can vote after ${diff} year`);
}
else {
    console.log("your name is" + name + "your age is "+ age +"you are eligible");
}