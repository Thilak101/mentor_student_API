const mongoose = require("mongoose")

const connectDB = async () => {
    const connect = await mongoose.connect(process.env.MONGODB_URL)
    console.log("mongoDB is connected" + connect.connection.host)
}

module.exports = connectDB