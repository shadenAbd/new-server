const mongoose = require("mongoose");

const connectToDatabase = () => {
    const mongoDBConnectionString = "mongodb+srv://shaden:ylZ8OeCbAMf5jfY5@cluster0.q0icn1t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    if (!mongoDBConnectionString) {
        console.log("an error occured cant connect to data base : error code -> undefined database url");
        return;
    }
    mongoose.connect(mongoDBConnectionString);

    mongoose.connection.on("connected", () => {
        console.log("MongoDB Connected");
    });

    return mongoose.connection;
};

module.exports = connectToDatabase;