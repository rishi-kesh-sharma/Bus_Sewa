const { sendResponse } = require("./sendResponse");

// create token and saving in cookie
const sendToken=async(res)=>{
    const token=await res.user.getJWTToken()
    res.cookie("token",token).json({success:true,message:"user logged in!!!"})
}
module.exports=sendToken;