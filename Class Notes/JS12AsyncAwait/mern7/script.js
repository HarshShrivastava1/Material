// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

// async await
async function getuser() {
    try {
        const str = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await str.json();
        console.log(json);
        console.log("Hello");
    } catch (error) {
        console.log(error);
    }
}

getuser();
