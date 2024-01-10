// create
// var arr = [87, 43, 56, 12, 90, 39, 61, 7, 36, 13];

// read
// console.log(arr);
// console.log(arr[3]);
// console.log(arr.at(-2));

// update
// arr[3] = 98;
// console.log(arr);

// delete
// delete arr[4];
// console.log(arr);

// Array Mutable Methods
// var arr = [87, 43, 56, 12, 90, 39, 61, 7, 36, 79];
// console.log(arr);

//adding the element in an array
// var l = arr.push(123, 234);
// var l = arr.unshift(123, 234);

// deleting an element from an array
// var l = arr.pop();
// var l = arr.shift();
// var l = arr.splice(2, 1); //(index , element , value)( 4 index se ,1 kitne value replace , values )

// console.log(arr);
// console.log(l);

// iterating over the array
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (var i of arr) {
//     console.log(i);
// }

// arr.forEach(function (element, index) {
//     console.log(element, index);
// });

// immutablity concept array & obj ; to over come from it the above method is used which is copy array;

// how to copy an array
// var arr = [87, 43, 56, 12, 90, 39, 61, 7, 36, 79];
// console.log(arr);
// var copyarr = [...arr]; // spread operator
// copyarr[0] = 69;
// console.log(arr);
// console.log(copyarr);

// changing array values immutably
// var arr = [87, 43, 56, 12, 90, 39, 61, 7, 36, 79];
// var newarr = [];
// console.log(arr);
// arr.forEach(function (e, i) {
//     newarr.push(e * 2);
// });
// console.log("original", arr);
// console.log("new", newarr);


// Home Prc
// var arr = [87, 43, 56, 12, 90 , 7, 36, 79];
// var arr = [87, 43, 56, 12, 90 , 7, 36, 79, 88]; dought full
// var arr = [87, 66, 54, 12, 90 , 7, 36, 79];
// var l = arr.splice(1, 2 ,66,54);
// console.log(arr);

//Home prc
// var arr = [87, 43, 56, 12, 90, 39, 61, 7, 36, 79];
// var newarr = [];
// console.log(arr);
// arr.forEach(function (e, i) {
//   newarr.push(e * 2);
// });

// console.log("original", arr);
// console.log("new", newarr);