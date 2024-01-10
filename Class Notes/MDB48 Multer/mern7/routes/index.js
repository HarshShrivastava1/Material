var express = require('express');
var router = express.Router();
const upload = require('./multer')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/uploadFile', upload.single('file'), (req, res, next) => {
  console.log(req.file)
  res.send('file uploaded')
})

module.exports = router;
