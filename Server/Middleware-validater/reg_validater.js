
const validater = (schema)=> async(req,res,next)=>{
    try {
        const parceBody = await schema.parseAsync(req.body);
        req.body = parceBody;
        next();
    } catch (error) {
        const msg =  error.issues[0].message;
        console.log(msg);
        res.status(400).json({ msg : msg});
        
    }

}
module.exports = validater;