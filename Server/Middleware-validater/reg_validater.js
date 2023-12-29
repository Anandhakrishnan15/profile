
const validater = (schema)=> async(req,res,next)=>{
    try {
        const parceBody = await schema.parseAsync(req.body);
        req.body = parceBody;
        next();
    } catch (err) {
        const statusCode = 402;
        const message=  err.issues[0].message;
        const error = {
       statusCode,message
    }
        return next(error)
}
}
module.exports = validater;