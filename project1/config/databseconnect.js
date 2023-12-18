const dotenv = require('dotenv');
const mongoose= require("mongoose");

const database=process.env.DB;

const connectDB = async()=>{
    try {
    await mongoose.connect(database);
        console.log("conncction successfull ");
    } catch (error) {
        console.error(error);
        
    }
}

module.exports= connectDB