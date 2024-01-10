var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});
router.get("/about", function (req, res, next) {
    res.render("about", { title: "Express" });
});
router.get("/signup", function (req, res, next) {
    res.render("signup", { title: "Express" });
});
router.get("/profile", function (req, res, next) {
    data = req.query;
    res.render("pross", { data });
});

router.post("/profile", function (req, res, next) {
    data = req.body;
    res.render("pross", { data });
});


module.exports = router;
