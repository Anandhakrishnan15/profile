require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const router = require("./Auth/Auth-Node");
const {PORT} = require("./config/Port");
const connectDB = require("./database/db")

//this is inporting the router from the OG file to this server page 
const app = express();
app.use(express.json());
// const connectDB = require('./database/db')

app.use("/", router);

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("serrver-runnig");
    })
})