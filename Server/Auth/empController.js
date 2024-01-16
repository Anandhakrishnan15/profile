const empl = require('../module/empolyessModule')

const Empl = async(req,res,next)=>{
    try {
        const findemp = await empl.find();
        if(!findemp){
            res.status(404).json("there is a error");
            return;
        }
    res.status(200).json({msg :findemp})
    } catch (error) {
        console.log("Error", error);
        
    }
}
module.exports= Empl