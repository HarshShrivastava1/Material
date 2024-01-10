const mongoose = require("mongoose");

const book_Schema = new mongoose.Schema({
    name: String,
    author: String,
    desc: String,
    page: String,
    pub: String,
    yr: String,
    price: String,
});

module.exports = mongoose.model("book", book_Schema);
