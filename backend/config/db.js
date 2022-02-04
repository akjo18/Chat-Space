const mongoose = require("mongoose");

const connectDB = async() => {
    const dbURI =
        "mongodb+srv://akjo:test1234@cluster0.jdejq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    try {
        const conn = await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;