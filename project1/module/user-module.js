// this is making the module for our collections
const mongoose = require('mongoose');
const bcript = require("bcrypt");
const jwt =require('jsonwebtoken')
//now we will creat the seama in mongoose 
const userSchema = new mongoose.Schema({
    //in b/w this curly braces we will give the keys what our module shoul have in it

    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isadmin: {
        type: Boolean,
        default: false
    }
})

//password secure with bcript
userSchema.pre('save', async function (next) {
    const hpwd = this;

    if (!hpwd.isModified("password")) {
        next();
    }
    try {
        const salt = await bcript.genSalt(10);
        const pwdHash = await bcript.hash(hpwd.password, salt);
        hpwd.password = pwdHash;

    } catch(error) {
        next(error)
    }
})
//anandhakrishnan
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId: this._id.toString(),//conver the id in Db into a string
            email: this.email,
            isAdmin:this.isAdmin,
            
        },
        process.env.JWT_TOKEN
        )
    } catch (error) {
        console.log(error)
    }
};

//  define the model or the collection name
const Moduleuser = new mongoose.model('register', userSchema);

module.exports = Moduleuser;