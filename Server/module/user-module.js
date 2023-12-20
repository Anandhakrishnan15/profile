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
    }
        
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
 userSchema.methods.generateToken = async function(){
    try {
      return jws.sign({
          userid:this._id.toString(),
          email: this.email,
          isadmin:this.isadmin,
      },
      process.env.JWAT_TOKWEN
      );
    } catch (error) {
      console.error(error);
    }
   }
// define the model or the collection name

const User = new mongoose.model("users", userSchema);

module.exports= User;