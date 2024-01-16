const {Schema,model} = require("mongoose")

const employeeSchema = new Schema({
    name:{type:String,require:true},
    job_title:{type:String,require:true},
    salary_received:{type:String,require:true},
    Phone_number:{type:String,require:true},
    address:{
        street:{type:String,require:true},
        city:{type:String,require:true},
        state:{type:String,require:true},
        zipcode:{type:String,require:true},
    }
})

const empl = new model("employes", employeeSchema)
module.exports = empl

