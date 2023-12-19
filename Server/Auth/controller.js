const User = require("../module/user-module")
<<<<<<< HEAD
const bcript = require("bcrypt");
=======
// const bcript = require("bcrypt");
>>>>>>> 59ee2d71d5fc6a3fd55da8f0679a9ab79bf0191b
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
        res.status(200)
        .send("login page")
<<<<<<< HEAD
        const {email, password} =req.body;
        const userALT = await User.findOne({email: email});

        if (!emailALT){
            res.status(400).json({msg:"invalided crudencial"});
        }
        const pwdmach = await bcript.compare(password,emailALT.password);
        if ( pwdmach){
            res.status(200).json({
                msg:"login sucessfull",
                // userID : userALT._id.tosting()
            })
        }else{
            res.status(401)
            .json({
                msg:"entered email or the password is incorrect"
            })
        }



=======
>>>>>>> 59ee2d71d5fc6a3fd55da8f0679a9ab79bf0191b
    } catch (error) {
        res.status(400)
        .send({msg:"page not found"})
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