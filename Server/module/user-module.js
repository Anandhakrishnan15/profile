const mongoose= require("mongoose");
const bcript = require("bcrypt");
const jws = require("jsonwebtoken")
 const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isadmin:{
        type:Boolean,
        default:false
    }
 });
 userSchema.pre('save', async function(next){
    const user = this;
    if (!user.isModified("password")){
        next()
<<<<<<< HEAD
    } 

=======
    }
        
>>>>>>> 59ee2d71d5fc6a3fd55da8f0679a9ab79bf0191b
    try
    {
        const salt = await bcript.genSalt(10);
        const pwdhash = await bcript.hash(user.password,salt);
        user.password =pwdhash;
    } 
    catch (error) {  
        next(error)   
    }
    

 })

// define the model or the collection name

const User = new mongoose.model("users", userSchema);

module.exports= User;