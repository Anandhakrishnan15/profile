const {Schema, model} =require("mongoose");;

const contactsmsg = new Schema({
    username : {
        type: String,
        require: true,

    },
    email: {
        type: String,
        require: true,
        
    }, 
    request: {
        type: String,
        require: true,
    }
})
const contactmodel = new model("mail-req", contactsmsg)
module.exports = contactmodel
