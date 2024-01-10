var express = require('express');
var router = express.Router();
const passport = require('passport')
const users = require('./users')
const postModel = require('./post')
const localStrategy = require('passport-local')
passport.use(new localStrategy(users.authenticate()))

router.post('/register', (req, res, next) => {
  var newUser = new users({
    //user data here
    username: req.body.username,
    email: req.body.email,
    //user data here
  });
  users
    .register(newUser, req.body.password)
    .then((result) => {
      passport.authenticate('local')(req, res, () => {
        //destination after user register
        res.redirect('/homepage');
      });
    })
    .catch((err) => {
      res.send(err);
    });
});


router.get('/homepage', (req, res, next) => {
  res.render('homepage')
})


/*

username
password

 */

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/homepage',
    failureRedirect: '/login',
  }),
  (req, res, next) => { }
);




/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
