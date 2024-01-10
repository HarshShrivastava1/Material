const multer = require('multer')
const crypto = require('crypto')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const fileName = crypto.randomBytes(20).toString('hex')
        cb(null, fileName + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

module.exports = upload