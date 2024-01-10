var express = require("express");
var router = express.Router();

let books = [
    {
        id: 1,
        name: "Son of Evil",
        author: "aditya",
        desc: "book covering crime",
        page: "320",
        pub: "jjk publcation",
        yr: "2023",
        price: "800",
    },
    {
        id: 2,
        name: "Swipe of Love",
        author: "goo",
        desc: "book covering love birds",
        page: "400",
        pub: "unbrun publication",
        yr: "2019",
        price: "500",
    },
];
/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/reg", function (req, res, next) {
    res.render("reg");
});

router.post("/reg", function (req, res, next) {
    books.push(req.body);
    console.log(req.body);
    res.redirect("/show");
});

router.get("/show", function (req, res, next) {
    res.render("show", { array: books });
});

router.get("/about", function (req, res, next) {
    res.render("about");
});

router.get("/detail/:idx/author/:auth", function (req, res, next) {
    res.render("detail", { data: books[req.params.idx], idx: req.params.idx });
});
router.get("/detail/:idx/author/:auth/delete", function (req, res, next) {
    console.log(books);
    books.splice(req.params.idx, 1);
    console.log(books);
    res.redirect("/show");
});
module.exports = router;
