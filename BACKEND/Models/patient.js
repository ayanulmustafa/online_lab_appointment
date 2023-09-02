const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
patient_id:{
    type: Number,
    required : true,
},
patient_name: {
    type: String,
    required: true,
},
email_id:{
    type: String,
    required: true,
},
contactno: {
    type:Number,
    required: true,
},
age: {
    type:Number,
    required: true,
},
password: {
    type:Number,
    required: true,
},
});

const patientmodel = mongoose.model("patient",patientSchema)
module.exports = patientmodel