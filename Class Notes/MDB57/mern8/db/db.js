const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0/mern8referenceSche').then(val => {
    console.log('db connected')
})