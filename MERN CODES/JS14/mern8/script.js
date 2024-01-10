// const fs = require("fs");

// fs.writeFileSync("file.txt", "");
// console.log("File Created!");

// fs.appendFileSync("file.txt", "Writing data in existing file");
// console.log("Data Updated in File!");

// const filedata = fs.readFileSync("file.txt", "utf-8");
// console.log(filedata);
// console.log(filedata.toString());

// fs.unlinkSync("file.txt");
// console.log("file deleted!");

// fs.mkdirSync("level1");
// console.log("Folder Created!");

// const dirdata = fs.readdirSync("level1");
// console.log(dirdata);

// fs.rmdirSync("level1");
// console.log("Folder Removed!");

// fs.renameSync("old file/folder path", "new file/folder path");

// ------------------------------------------

// No-SQL-MONGODB -> JSON
// single object is known as document
// collection of documents is known as Collections/Model/Schema
// collection of collections is known as Database
const profile = [
    { id: "79834thj", name: "Anurag", skill: "AI/ML" },
    { id: "546lkn", name: "Hitesh", skill: "Backend" },
    { id: "9854jkfd", name: "Sarthak", skill: "Frontend" },
    { id: "9078lkgf", name: "Muskan", skill: "DSA" },
    { id: "1265shj", name: "Rishika", skill: "UIUX" },
];
const profile = [
    { id: "79834thj", name: "Anurag", skill: "AI/ML" },
    { id: "546lkn", name: "Hitesh", skill: "Backend" },
    { id: "9854jkfd", name: "Sarthak", skill: "Frontend" },
    { id: "9078lkgf", name: "Muskan", skill: "DSA" },
    { id: "1265shj", name: "Rishika", skill: "UIUX" },
];
const profile = [
    { id: "79834thj", name: "Anurag", skill: "AI/ML" },
    { id: "546lkn", name: "Hitesh", skill: "Backend" },
    { id: "9854jkfd", name: "Sarthak", skill: "Frontend" },
    { id: "9078lkgf", name: "Muskan", skill: "DSA" },
    { id: "1265shj", name: "Rishika", skill: "UIUX" },
];

// traverse
// profile.forEach((e) => console.log(`<h1>${e.name}</h1>`));
// const t = profile.map((e) => `<h1>${e.name}</h1>`);
// console.log(t);

// updating existing data
// const idx = profile.findIndex((p) => p.id === "546lkn"); // findIndex data by id
// // overwrite the data
// const upatedData = {
//     name: "Ankur",
// };
// profile[idx] = { ...profile[idx], ...upatedData };
// console.log(profile);

// deleting data
// const filteredProfile = profile.filter((p) => p.skill !== "DSA");
// console.log(filteredProfile);

// finding data or index of data
// const user = profile.findIndex((p) => p.skill === "Backend");
// const user = profile.find((p) => p.skill === "Backend"); //provides singe data
// const user = profile.filter((p) => p.skill === "Backend"); // provides multiple data
// console.log(user);

// adding new document
// const newdata = {
//     id: "7834hjfd",
//     name: "Rohit",
//     skill: "UIUX Developer",
// };
// console.log(profile);
// profile.push(newdata);
// console.log(profile);
