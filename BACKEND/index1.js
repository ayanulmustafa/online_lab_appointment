const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
mongoose.connect("mongodb+srv://ayan:MongoDBAtlas@healthcare-online.c4bqvmf.mongodb.net/HealthCare")

app.use(express.json())
app.use(morgan('dev'))

app.listen(3001, () => {
console.log("Server is running")
});

app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/tests', require('./routes/testRoutes'));