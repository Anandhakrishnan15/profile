// we aer going to check the JWT varification and fetch the data from the data base 
const jwt = require("jsonwebtoken")
const User = require("../module/user-module");
const { Await } = require("react-router-dom");
const userDataMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    const jwttoken = token.replace("Bearer", "").trim();
    if (!token) {
        return res.status(401).json({ msg: "Unanthorized HTTP,Topen is not provided" })
    }
    // console.log(jwttoken);

    try {
        const isVarified = jwt.verify(jwttoken, process.env.JWAT_TOKWEN)
        const userData = await User.findOne({ email: isVarified.email }).select({
            password: 0,
        })
        // console.log(userData);
        req.user = userData;
        req.token = token;
        req.userId = userData._id;

        next()
    } catch (error) {
        return res.status(401).json({ msg: "Unanthorized,Token not provided" })
    }

}
module.exports = userDataMiddleware
