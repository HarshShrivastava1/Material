var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

let data =
[
  {name:"harsh" , skill:"backend"},
  {name:"ayushi" , skill:"java"},
  {name:"shailesh" , skill:"Node"},
  {name:"hari" , skill:"Frontkend"}

]

module.exports = router;
