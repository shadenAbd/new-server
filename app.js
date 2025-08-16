const express = require("express");
const app = express();
const cors = require("cors");
const connectToDatabase = require("./storage/mongoDB");
app.use(cors());
app.use(express.json());

const router = require("./routes/globalRoute")
connectToDatabase()
app.get("/",(req,res)=>{
    res.status(200).json({message:"sever is live"})
})
app.use("/", router);


module.exports = app;