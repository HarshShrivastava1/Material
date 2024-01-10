var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let randomvalues = [21, 23, 34, 45, 65];
  let username="jyotsna"
  let student={
    name:"khyati",
    age:10,
  }
  // let jsonarr={
  //   "name":"John",
  //   "age":30,
  //   "cars":["Ford", "BMW", "Fiat"]
  //   }

    let values=[
      {
        name:'khyati', skill:"fullstack"},
       { name:'jyotsna',skill:"java"},
       { name:'deepu',skill:"javascript"
      },
    ]
    res.render("index", { arr: randomvalues,admin:username,obj:student,values:values});
});

module.exports = router;
