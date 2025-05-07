const express = require("express");
const app = express();
const cors = require("cors");
const connectToDatabase = require("./storage/mongoDB");
app.use(cors());
app.use(express.json());

const router = require("./routes/globalRoute")
connectToDatabase()
app.use("/", router);


module.exports = app;