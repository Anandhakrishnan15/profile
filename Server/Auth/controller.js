const User = require("../module/user-module")
const bcript = require("bcrypt");


//* controller

const home = async (req, res) => {
    try {
        res.status(200)
            .send('hello homepage ');

    } catch (error) {
        console.log(error);
    }
}
const reg = async (req, res, next) => {
    try {
        const { username, email, phone, password } = req.body;
        // const data = req.body;

        const UserExist = await User.findOne({ email: email });
        if (UserExist) {
            return res.status(400).json({ msg: "emai aready exist" })
        }
        //this is hashig the password
        // const salt = 10;
        // const hash_password = await bcript.hash(password,salt);

        const usercreate = await User.create({
            username,
            email,
            phone,
            password
            // password:hash_password
        });
        res.status(200).json({
            msg: "register sucessfull",
            token: await usercreate.generateToken(),
            userId: usercreate._id.toString()
        });
        // .json({msg:"data inserted"});
    } 
     catch (error) {
        // res.status(400)
        // .json({msg:"page no found"})
        // console.log(err);
        next(error)

    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isemailThere = await User.findOne({ email: email });

        if (!isemailThere) {
            // console.log("invale email");
            res.status(400).json({ msg: "email not there try again" })
        }
        //    const compairPWD = await bcript.compare(password, isemailThere.password)
        const compairPWD = await isemailThere.compairpassowrd(password);
        if (compairPWD) {
            res.status(200).json({msg:"login successful",
            token: await isemailThere.generateToken(),
            userId: isemailThere._id.toString()
        });
        }
        else {
            res.status(401).json({ msg: "email or password is in correct" })
        }

    } catch (error) {
        res.status(400)
        console.log(error);
        // next(error)
    }
}
const about = async (req, res) => {
    try {
        res.status(200)
            .send("about page")
    } catch (error) {
        res.status(400)
            .send({ msg: "page not found" })
        console.log(error);
    }
}


module.exports = { home, reg, login, about }