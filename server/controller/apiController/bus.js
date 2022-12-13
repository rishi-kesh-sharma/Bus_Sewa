const catchAsyncErrors = require("../../middleware/catchAsyncErrors")
const Bus = require("../../model/bus")
const { sendResponse } = require("../../utils/sendResponse")


// CREATE BUS
exports.createBus=catchAsyncErrors( async(req,res,next)=>{
       const bus=await Bus.create({...req.body})
       await bus.save()
       sendResponse(res,200,{success:true,message:"Bus created"})
})

// GET ALL BUS
exports.getAllBus=catchAsyncErrors( async(req,res,next)=>{
const buses=await Bus.find()
sendResponse(res,200,{success:true,buses})
})

// GET SINGLE BUS
exports.getSingleBus=catchAsyncErrors( async(req,res,next)=>{
       const bus=await Bus.findById(req.params.busId)
       sendResponse(res,200,{success:true,bus})
})

//DELETE BUS 
exports.deleteBus=catchAsyncErrors( async(req,res,next)=>{
       const bus=await Bus.findById(req.params.busId)
       bus.remove()

       sendResponse(res,200,{success:true,message:"bus deleted!!!"})
})

//UPDATE BUS 
exports.updateBus=catchAsyncErrors( async(req,res,next)=>{
       const bus=await Bus.findByIdAndUpdate(req.params.busId,req.body)

       sendResponse(res,200,{success:true,message:"bus updated!!!"})
})


