const Moduleuser = require("../module/user-module");
const bcript =require("bcrypt");
//home page
const home= async(req,res)=>{
    try {
        res.send("hello home page");
    }catch (error) {
        console.log(error);
    }
}

//about page 
const about= async(req,res)=>{
    try {
        res.send("hello about page");
    }catch (error) {
        console.log(error);
    }
}

//contact page 
const contact= async(req,res)=>{
    try {
        res.send("hello contact page");
    }catch (error) {
        console.log(error);
    }
}

//login page
const login= async(req,res)=>{
    try {
        // res.send("hello login page");
        const {email,password} = req.body;
        const emailexist = await Moduleuser.findOne({email:email})
        if (!emailexist){
            res.status(400).json({msg :"email doset Exist"})
        }
        const EnteredPWD = await bcript.compare(password, emailexist.password);
        if (EnteredPWD){
            res.status(200)
            .json({
                msg:"LOgin successfull",
                token: await emailexist.generateToken(), 
                userId: emailexist._id.toString()
            });
        }else{
            res.status(401).json({msg:"entered email or Pwd is incorrect"})
        }
   
    }catch (error) {
        console.log(error);
    }
}

//signup page
async function signup(req, res) {
    try {
        const data =req.body;
        const { username, email, phone, password } = req.body;
        const userALT = await Moduleuser.findOne({ email: email });

        if (userALT) {
            // return console.log("user alerady exist");
            return res.status(400).json({ msg: "user already exist" });
        }
        // const salt=10;
        // const pwdHash = await bcript.hash(password,salt);
        const regCreated = await Moduleuser.create({
            username,
            email,
            phone,
            password
            // password:pwdHash
        });
        res.status(200).json({
            msg: regCreated,
            token: await regCreated.generateToken(),
            userId: regCreated._id.toString()
        });
        // console.log({regCreated})
    } catch (error) {
        res.status(500).json("server error");
    }
}

module.exports={home,about,login,contact,signup}