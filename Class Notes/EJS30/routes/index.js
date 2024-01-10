var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    let randomvalues = [21, 34, 56, 78, 90];
    let username = "john_doe";
    let dets = {
        name: "Kashyap",
        city: "Bhopal",
    };
    let profiles = [
        { name: "Anurag", skill: "Backend" },
        { name: "Ankur", skill: "Backend" },
        { name: "Anubhav", skill: "Fullstack" },
        { name: "Ayush", skill: "3d artist" },
        { name: "Aadil", skill: "Frontend" },
        { name: "Ali", skill: "Java" },
        { name: "Akarsh", skill: "Python" },
    ];
    res.render("index", {
        arr: randomvalues,
        admin: username,
        obj: dets,
        // profiles: profiles,
        profiles,
    });
});

router.get("/signup", function (req, res, next) {
    const data = req.query;
    res.json(data);
});

module.exports = router;
