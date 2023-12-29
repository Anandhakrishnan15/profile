const errorHandeler = (err, req, res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message ||"erroe";
    res.status(statusCode).json({statusCode,message})
}
module.exports = errorHandeler