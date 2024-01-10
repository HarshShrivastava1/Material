// changing value immutablly
// var arr = [21, 43, 65, 87, 90, 32, 45, 67, 89, 100];
// var newarr = [];
// arr.forEach(function (e, i) {
//     newarr.push(e * 2);
// });
// console.log(arr);
// console.log(newarr);

// mapping(manuplation)
// var arr = [21, 43, 65, 87, 90, 32, 45, 67, 89, 100];
// var newarr = arr.map(function (e, i) {
//     return e * 2;
// });
// var newarr = arr.map((e) => e * 2);
// console.log(arr);
// console.log(newarr);

// filtering(delete value);
// var arr = [21, 43, 65, 87, 90, 32, 45, 67, 89, 100];
// var newarr = arr.filter(function (e, i) {
//     return e !== 90;
// });
// var newarr = arr.filter((e) => e !== 90);
// var newarr = arr.slice(2, 5);
// console.log(newarr);

// rest operator in functions
// variable length parameters/arguments in function
// function hobbie(name, ...h) {
//     console.log(name, h);
// }
// hobbie("Kashyap", "one", "two", "three", "four", "five");

//Creating Object
var obj = {
    username: "anubhav",
    email: "anubhav@gmail.com",
    age: 21,
};

// reading object
// console.log(obj);
// console.log(obj.x);
// var x = "email";
// console.log(obj[x]);

// updating object
// obj.city = "bhopal";
// obj.age = 23;

// deleting properties in object
// delete obj.age;
// console.log(obj);

// copying object
// var newobj = obj; xxxxxxxxxxxx
var newobj = { ...obj };
newobj.city = "Bhopal";
console.log(obj);
console.log(newobj);
