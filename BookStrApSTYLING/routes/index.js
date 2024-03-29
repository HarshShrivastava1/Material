var express = require('express');
var router = express.Router();
const books = [
  {
    id: 123,
    name: "jhon",
    prize: "405"
  } ,
  {
    id: 456,
    name: "abhi",
    prize: "965"
  } ,
  {
    id: 789,
    name: "max",
    prize: "745"
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.get('/show', function(req, res, next) {
  res.render('show',{books:books});
});
router.post('/register', function(req, res, next) {
  books.push(req.body);
  res.redirect("/show");
});

router.get('/details/:index', function (req, res, next) {
  const dets = books[req.params.index];
  // res.json(dets);
  res.render("details", { data: dets, index: req.params.index });
});

router.get('/delete/:index', function (req, res, next) {
  books.splice(req.params.index, 1);
  res.redirect("/show");
});

router.get('/update/:index', function (req, res, next) {
  const dets = books[req.params.index];
  res.render("update", { book: dets, index: req.params.index });
});

router.post('/update/:index', function (req, res, next) {
  books[req.params.index] = req.body;
  res.redirect("/show");
});




module.exports = router;
