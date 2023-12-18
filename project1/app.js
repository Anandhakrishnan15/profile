require("dotenv").config();
const express = require("express");
const mongoose =require("mongoose");
const {PORT} = require("./config/config");
const connectDB = require("./config/databseconnect")
const Router =require("./auth/Router")


const app= express()
app.use(express.json())

app.use("/", Router)

const port= PORT
// mongoose.connect(Database)
connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`serveris running on port;${PORT}`);
    });
});
