const mongoose = require("mongoose")

const testsSchema = new mongoose.Schema({
title:{
    type: String,
    required : true,
},
code: {
    type: String,
    required: true,
},
group:{
    type: String,
    required: true,
},
description:{
    type: String,
    required: true,
},
price: {
    type:Number,
    required: true,
},
discountedPrice: {
    type:Number,
    required: true,
}

});

const testmodel = mongoose.model("tests",testsSchema)
module.exports = testmodel