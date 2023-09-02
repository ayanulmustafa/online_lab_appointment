const user = require('../Models/user')
const jwt = require("jsonwebtoken");

const JWT_SECRET = "SCLKDCKSL12314LCZCCX"

const registerUser = async (req, res) => {

    try {
        const existinguser = await user.findOne({email:req.body.email});
        if(existinguser){
            return res.status(200).send({message:'User Already Exist', success:false});
        }
        const newUser = new user(req.body);
        await newUser.save();
        res.status(201).send({message:'Register Successfully', success:true});


    } catch (error) {
        console.log(error);
            res.status(500).send({success:false, message: `Register Controller ${error.message}`})
    }
}

const loginUser = async (req, res) => {
    try {
      const user1 = await user.findOne({ email: req.body.email });
       console.log(user1);
    //   console.log(user1.password);
    //   console.log(req.body.password);
      if (!user1) {
        return res.status(200).json({ message: "User not found", success: false });
      }
      const Match = req.body.password;
      if (Match != user1.password) {
        return res.status(200).send({ message: "Invalid Email or Password", success: false });
      }
      const token = jwt.sign({ id: user1.__id }, JWT_SECRET, {
        expiresIn: "1d",
      });
      res.status(200).send({ message: "Login Success", success: true, token, user: user1 });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: error.message });
    }
  };
  

module.exports={
    registerUser,loginUser
}