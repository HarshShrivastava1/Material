var express = require('express');
var router = express.Router();
const books = [];
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
          
module.exports = router;
