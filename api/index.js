const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(console.log("connected to MongoDB"))
.catch((err) => console.log(err));




app.use("/", (req,res)=> {
    console.log("Hey, this is the main page")
})

app.listen("5000", ()=>{
    console.log("Backend is running");
})