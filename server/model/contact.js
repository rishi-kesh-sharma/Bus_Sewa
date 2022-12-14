const mongoose=require("mongoose")
// CREATE SCHEMA FOR Contact
const ContactSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"User"
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    
    },
   
    
})




const Contact=mongoose.model("Contact",ContactSchema)
module.exports=Contact;