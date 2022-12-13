const catchAsyncErrors = require("../../middleware/catchAsyncErrors")
const Contact = require("../../model/contact")
const { sendResponse } = require("../../utils/sendResponse")


// CREATE CONTACT
exports.createContact=catchAsyncErrors( async(req,res,next)=>{
       console.log(req.body)
       const contact=await Contact.create({...req.body,user:req.user.id})
       await contact.save()
       // sendResponse(res,200,{success:true,message:"contact created"})
       res.redirect("")
})

// GET ALL CONTACT
exports.getAllContact=catchAsyncErrors( async(req,res,next)=>{
    const contacts=await Contact.find()
    sendResponse(res,200,{success:true,contacts}).populate("user")
})

// GET SINGLE CONTACT
exports.getSingleContact=catchAsyncErrors( async(req,res,next)=>{
       const contact=await Contact.findById(req.params.contactId).populate("user")
       sendResponse(res,200,{success:true,contact})
})

//DELETE CONTACT 
exports.deleteContact=catchAsyncErrors( async(req,res,next)=>{
       const contact=await Contact.findById(req.params.contactId)
       contact.remove()

       sendResponse(res,200,{success:true,message:"contact deleted!!!"})
})


