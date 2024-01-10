const contactmodel = require("../module/contactModule")

const contact = async(req ,res,next)=>{
    try {
        const resposnce = req.body;
        await contactmodel.create(resposnce);
        return res.status(202).json({msg:"message sent successful"})
    } catch(error) {
        //  return next(error)
        console.log(error);
}
}

module.exports = contact