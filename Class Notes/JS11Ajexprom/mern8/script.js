// sync async
// DOM setTimeout setTimeInterval

// try catch - Handling Exception of Sync Code
// try {
//     let a = 12;
//     let b = 13;
//     let c = a + b;
//     if (c % 2 !== 0) {
//         throw TypeError("Odd Values Are Not Allowed");
//     }
//     console.log(c);
// } catch (error) {
//     // console.log(error);
//     console.log(error.name, " => ", error.message);
// }
// console.log("Hello");

// AJAX(Asynchronous JavaScript And XML /JSON-array of objects[{},{},{}])
// AJAX handle data in frontend -- API is given by backend
// fetch API
fetch("https://picsum.photos/v2/list")
    .then((result) => result.json())
    .then((res) => console.log(res))
    .catch((error) => console.log(error.name, " => ", error.message));
console.log("Hello World");

// fetch(API)
// .then(res => res.json())
// .then(res => console.log(res))
// .catch(err => console.log(err))

// Promise(for handling errors in async code)
// creation of promise ❌
// promise ko use krna ✔️

// Promise(async code handle)
// function promise(n) {
//     return new Promise((response, reject) => {
//         if (n % 2 === 0) response("Number is Even");
//         else reject("Number is Odd");
//     });
// }
// promise(22)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

// Async Await
