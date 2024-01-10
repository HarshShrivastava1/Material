const mongoose = require("mongoose");
async function performDatabaseOperation() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/test129");
        console.log("db connected");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
performDatabaseOperation();
