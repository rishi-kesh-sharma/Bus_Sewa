const CryptoJs=require("crypto-js")

const catchAsyncErrors = require("../../middleware/catchAsyncErrors");
const User=require("../../model/user")
const ErrorHandler = require("../../utils/errorHandler");
const sendToken = require("../../utils/jwtToken");
const { sendResponse } = require("../../utils/sendResponse");
const Auth = require("../../model/auth");
const Booking = require("../../model/booking");
const Bus = require("../../model/bus");


// forgot password


// UPDATE USER PASSWORD

exports.updateUserPassword=catchAsyncErrors(async(req,res,next)=>{
const {oldPassword,newPassword,confirmPassword}=req.body;

if(!oldPassword || !newPassword || !confirmPassword){
    return next(new Error("fields not filled properly",400))
}
if(confirmPassword !=newPassword ){
    return next("passwords not matching",400)
}
const auth=await Auth.findOne({user:req.user._id})

const isPasswordMatched=await Auth.comparePassword(oldPassword,auth.password)

if(!isPasswordMatched){
    return next (new ErrorHandler("old password is incorrect",400))
}

auth.password=newPassword
await auth.save()
sendResponse(res,200,{success:true,message:"password updated successfully"})
})





// UPDATE USER

exports.updateUser=catchAsyncErrors(async(req,res,next)=>{


   let user=await User.findByIdAndUpdate(req.user.id,{
    $set:req.body,
    new:true,
    runValidators:true
   });

   await user.save()
  

  sendResponse(res,200,{success:true,message:"user  updated successfully"})  
})

// UPDATE USER ROLE

exports.updateUserRole=catchAsyncErrors(async(req,res,next)=>{

   let user=await User.findById(req.params.userId);

   user.role=req.body.role

   await user.save()
  sendResponse(res,200,{success:true,  message:"user role updated successfully"})  
})

// DELETE USER
exports.deleteUser=catchAsyncErrors(async(req,res,next)=>{

    const user=await User.findById(req.params.userId)

    if(!user){
        return next(new ErrorHandler(`user does not exist with id: ${req.params.userId}`))
    }
     if(user.role.includes("admin")){
        sendResponse(res,401,{success:false,message:"cannot delete admin!!!"})
     }
    await user.remove();
   
    sendResponse(res,200,{success:true,message:"user deleted successfully"})
})

// GET ALL USERS

exports.getAllUser=catchAsyncErrors(async(req,res,next)=>{
    const users=await User.find()
    sendResponse(res,200,users)

})
// GET SINGLE USER

exports.getSingleUser=catchAsyncErrors(async(req,res,next)=>{
    const user=await User.findById(req.params.userId)
    if(!user){
      new ErrorHandler("user not found",400);
    }
    
sendResponse(res,200,{success:true,user})
})


