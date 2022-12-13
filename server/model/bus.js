const mongoose=require("mongoose")
// CREATE SCHEMA FOR BUS
const busSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    busNo:{
        type:String,
        unique:true,
        required:true
    },
    
    capacity:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    
    },
   
   status:{
    type:String,
    required:true,
    default:"available",
    enum:["available","unavailable","booked"]
   } 
})




const Bus= mongoose.model("Bus",busSchema)
module.exports=Bus;