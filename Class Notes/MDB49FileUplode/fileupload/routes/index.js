var express = require("express");
var router = express.Router();

var upload = require("../utils/multer").single("avatar");

router.get("/", function (req, res, next) {
    res.render("index");
});

router.post("/upload", function (req, res, next) {
    upload(req, res, function (err) {
        if (err) throw err;

        res.json({ body: req.body, file: req.file });
    });
});

module.exports = router;
