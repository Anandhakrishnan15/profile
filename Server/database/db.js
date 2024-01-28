// const dotenv = require("dotenv");
const mongoose = require("mongoose");

// const db = "mongodb+srv://anandhakrishnanvellat15:anandhakrishnan@database.qzoeisd.mongodb.net/database?retryWrites=true&w=majority";

const db = process.env.URI;

const connectDB = async()=>{
   try {
    await mongoose.connect(db,{
      // Specify the write concern here
      writeConcern: {
         w: 'majority'
       }
    });
    console.log ("database connectd")
   } catch (error) {
    console.log("database not connected yet ");
    console.log(error);
   }
    
}
module.exports =connectDB
