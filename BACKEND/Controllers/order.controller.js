const ordermodel = require('../Models/orders');
const order = require('../Models/orders')

const bookTest =async(req,res) => {
    try {
        req.body.status = 0 ;
        const newOrder = new order(req.body);
        await newOrder.save();
        res.status(200).send({
          success: true,
          message: "Test Book succesfully",
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error While Booking Test",
        });
      }

};

const userbookings = async(req,res)=> {
  try {
    const bookings = await ordermodel.find({
      bookedBy:req.query.userid
      //fname:'ayan'
      //bookedBy:'63c45eeb63945fa1fdcf96f9'
    });
    
    res.status(200).send({
      success: true,
      message: "User Bookings Fetched Successfully",
      data: bookings,
    });
  } catch (error) {
    console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Error In Getting Bookings",
        });
  }
}



module.exports = {bookTest, userbookings}