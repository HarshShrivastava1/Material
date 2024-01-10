const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')

mongoose.connect('mongodb://0.0.0.0/mern8referenceSche')

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post'
    }
  ]
})

userSchema.plugin(plm)

module.exports = mongoose.model('user', userSchema)