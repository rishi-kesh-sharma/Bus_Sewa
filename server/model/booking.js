const mongoose=require("mongoose")

const bookingSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        required:true,
        ref:"User"
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true,
    },
    bookingFor:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"Bus"

    },
    bookingDate:{
        type:Date,
        required:true,
        default:Date.now()

    },
    from:{
        type:String,
        enum:["kathmandu","pokhara","bhairahawa","lamjung"],
        required:true,
        lowercase:true
    },
    to:{
        type:String,
        enum:["kathmandu","pokhara","bhairahawa","lamjung"],
        required:true,
        lowercase:true

    },
   
    message:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:["pending","accepted","rejected"],
        default:"pending",
        lowercase:true
    }
})


// return {} if the hospital Booking for is populated but returns null

bookingSchema.post("find",async function(result){
  const Bookings = result.map((item)=>{
         if(item.populated("createdBy")){

             if( item.createdBy==null || item.createdBy==undefined){
                return item.createdBy={}
             }else{
                return item.createdBy
             }
         }else{
            return item
         }
        
    })
    
})

bookingSchema.post("find",async function(result){
  const bookings = result.map((item)=>{
         if(item.populated("bookingFor")){

             if( item.bookingFor==null || item.bookingFor==undefined){
                return item.bookingFor={}
             }else{
                return item.bookingFor
             }
         }else{
            return item
         }
        
    })
    
})

const Booking=mongoose.model("Bookings",bookingSchema)



module.exports=Booking