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





/*

username
password

 */

router.get('/login', (req, res, next) => {
  res.render('login')
})

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/homepage',
    failureRedirect: '/login',
  }),
  (req, res, next) => { }
);

function isloggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  else res.redirect('/login');
}

router.get('/logout', (req, res, next) => {
  if (req.isAuthenticated())
    req.logout((err) => {
      if (err) res.send(err);
      else res.redirect('/');
    });
  else {
    res.redirect('/');
  }
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/homepage', isloggedIn, (req, res, next) => {
  res.render('homepage')
})


router.post('/createPost', isloggedIn, async (req, res, next) => {

  const currentUser = await users.findOne({ _id: req.user._id })

  const newPost = await postModel.create({
    image: req.body.image,
    caption: req.body.caption,
    owner: currentUser._id
  })
  currentUser.posts.push(newPost._id)
  await currentUser.save()

  res.send(newPost)


})


module.exports = router;
