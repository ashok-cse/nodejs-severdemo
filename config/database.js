const mongoose = require('mongoose');


require("mongoose")

const url = "mongodb+srv://ashokcse:UyKkchi9fdAILOLo@cluster0.uu4ujdq.mongodb.net/"

exports.connectDB = () => {
    mongoose
    .connect(url).then((con)=> console.log("Connected Successfully"))
    .catch((err)=> console.log("Not Connected", err))
}