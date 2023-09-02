const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
fname: {
    type: String,
    required: true,
},
lname: {
    type: String,
    required: true,
},
dob: {
    type: Date,
},
gender: {
    type: String,
    
},
email:{
    type: String,
    required: true,
},
mobile: {
    type:Number,
    required: true,
},
password: {
    type:String,
    required: true,
}

});

 
module.exports = mongoose.model("user",userSchema)