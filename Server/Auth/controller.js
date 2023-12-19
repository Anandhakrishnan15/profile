const User = require("../module/user-module")
const bcript = require("bcrypt");
//* controller

const home = async( req ,res) =>{
    try {
        res.status(200)
        .send('hello homepage ');
       
    } catch (error) {
        console.log(error);
    }
}
const reg = async(req ,res)=>{
    try {
        console.log(req.body);
        const data = req.body;
        const {username,email,phone,password} = req.body;

        const UserExist = await User.findOne({email:email});
        if (UserExist){
            return res.status(400).json({msg:"emai aready exist"})
        }
        //this is hashig the password
        // const salt = 10;
        // const hash_password = await bcript.hash(password,salt);

        const userCreated = await User.create({
            username,
            email,
            phone,
            password
            // password:hash_password
        });
   
        res.status(200).json({msg:userCreated});
        // .json({msg:"data inserted"});
    } catch (error) {
        res.status(400)
        .json({msg:"page no found"})
        console.log(error);
    }
}
const login = async(req ,res)=>{
    try {
       const {email, password}= req.body;
       const isemailThere= await User.findOne({email:email});

       if(!isemailThere){
        // console.log("invale email");
        res.status(400).json({msg:"email not there try again"})
       }
       const compairPWD = await bcript.compare(password, isemailThere.password)
       if (compairPWD){
        res.status(200).json({msg :"login successful"});
       }
       else{
        res.status(401).json({msg:"email or password is in correct"})
       }
       
    } catch (error) {
        res.status(400)
        console.log(error);
    }
}
const about = async(req ,res)=>{
    try {
        res.status(200)
        .send("about page")
    } catch (error) {
        res.status(400)
        .send({msg:"page not found"})
        console.log(error);
    }
}
const contact = async(req ,res)=>{
    try {
        res.status(200)
        .send("contact page")
    } catch (error) {
        res.status(400)
        .send({msg:"page not found"})
        console.log(error);
    }
}
module.exports= {home, reg,login,about,contact}