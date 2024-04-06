const Current_otp = require('../models/otp_model.js');

const otp_controller = {
  get_otp_page: (req, res)=>{
    res.render("otp-page");
  },

  get_current_otp: async (req, res)=>{
    try{
        const curr_otp = await Current_otp.findOne().sort({ _id: -1 });
        
        console.log("Current OTP: " + curr_otp);
        
        if (!curr_otp) {
          res.status(404).json({ message: 'No otp generated yet' });
        } else {
          const correctNumber = curr_otp.current_otp;
        
          res.render("otp-page", {correctNumber});
        }
    
        
    }catch(error){
        console.error("Error displaying current OTP ", error);
        res.status(500).send("Internal Server Error!");
    }
  }
}

module.exports = otp_controller;
