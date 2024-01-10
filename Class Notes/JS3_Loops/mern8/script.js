// Switch
// Iterative Statements / Loops

// loop variable  - 1
// updation expression - 1+1.. = 2..
// test/condition expression - 10-XXXX
// body of loop

// Entry Control - for while
// var i = 1; //loop variable
// while(i < 11) { // condition exp
//     console.log(i); // body of loop
//     i++; //updation exp
// }

// Exit Control - do while
// var i = 1; // loop variable
// do {
//     console.log(i); // body of loop
//     i++; //updation exp
// } while (i < 11); //condition exp


async function getUser() {
    try {
        var res = await fetch("https://jsonplaceholder.typicode.com/users");
        var resp = await res.json();
        console.log(resp);
        console.log("hello");           

    } catch (error) {
        console.log(error);
    }
}

getUser();