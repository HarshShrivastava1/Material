var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let profiles = [
  {name:"harsh",skill:"frontend",city:"bina"},
  {name:"mohit",skill:"backend",city:"katni"},
  {name:"hari",skill:"Dsa",city:"mumbai"}
  ]
  res.json('index', { profiles: profiles });
});

module.exports = router;
