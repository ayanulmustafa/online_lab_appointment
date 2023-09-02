const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
tid:{
    type: Number,
    
},

tcode:{
    type: String,
    required: true,
},
fname: {
    type: String,
    required: true,
},
lname: {
    type: String,
    required: true,
},
pgender: {
    type:String,
    required: true,
},
pdob: {
    type: Date,
    required: true,
},
pcontact: {
    type: Number,
    required: true,
},
tdate: {
    type: Date,
    required: true,
},
pcity: {
    type: String,
    required: true,
},
ppostal: {
    type:Number,
    required: true,
},
paddress: {
    type: String,
    required: true,
},
bookDate: {
    type:Date,
    
},
status: {
    type:Number,
    default:0,
},
bookedBy: {
    type: String,
    
}
});

const ordermodel = mongoose.model("order",orderSchema)
module.exports = ordermodel