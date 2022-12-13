const catchAsyncErrors = require("../../middleware/catchAsyncErrors");
const Booking = require("../../model/booking");
const Bus = require("../../model/bus");
const {sendResponse}=require("../../utils/sendResponse")


// CREATE Booking
exports.createBooking=catchAsyncErrors(async(req,res,next)=>{
   console.log(req.body.bookingFor)
    const booking=await Booking.create({...req.body,createdBy:req.user.id,createdAt:Date.now()});
      await booking.save();
   //   sendResponse(res,200,{success:true,message:"booking created successfully!!!"})
   res.redirect("/")

})


// GET ALL BookingS
exports.getAllBookings=catchAsyncErrors(async(req,res,next)=>{

   const bookings=await Booking.find().populate(["createdBy","bookingFor"])
  sendResponse(res,200,{success:true,bookings})
})


// GET ALL PENDING BOOKING

exports.getAllPendingBookings=catchAsyncErrors(async(req,res,next)=>{
   const bookings=await Booking.find({BookingFor:req.params.userId,status:"pending"}).populate(["createdBy","bookingFor"]);
   sendResponse(res,200,{success:true,bookings})
})

// GET ALL ACCEPTED BOOKING

exports.getAllAcceptedBookings=catchAsyncErrors(async(req,res,next)=>{
   const bookings=await Booking.find({BookingFor:req.params.userId,status:"accepted"}).populate(["createdBy","bookingFor"]);
   sendResponse(res,200,{success:true,bookings})
})
// GET  ALL REJECTED BookingS

exports.getAllRejectedBookings=catchAsyncErrors(async(req,res,next)=>{
   const bookings=await Booking.find({BookingFor:req.params.userId,status:"rejected"}).populate(["createdBy","bookingFor"]);
   sendResponse(res,200,{success:true,bookings})
})

// GET Booking
exports.getBooking=catchAsyncErrors(async(req,res,next)=>{
   const booking=await Booking.findById(req.params.bookingId).populate(["createdBy","bookingFor"])
   sendResponse(res,200,{success:true,booking})
})



// DELETE Booking
exports.deleteBooking=catchAsyncErrors(async(req,res,next)=>{
 const booking=  await Booking.findById(req.params.bookingId)
     await booking.remove()
   sendResponse(res,200,{success:true,message:"booking deleted successfully"})
})


// UPDATE Booking STATUS
exports.updateBookingStatus=catchAsyncErrors(async(req,res,next)=>{
   console.log(req.body)
  const booking= await Booking.findByIdAndUpdate(req.params.bookingId,
   {
   $set:req.body,
   new:true,
   runValidators:true,
   useFindAndModify:false
})

// console.log(booking)

// if(booking.status=="accepted"){
//    await Bus.findByIdAndUpdate(booking.bookingFor._id,{
//       $set:{status:"booked"},
//       new:true,
//       runValidators:true,
//       useFindAndModify:false
//    })
// }




sendResponse(res,200,{success:true,message:"booking status updated successfully"})
})


exports.getUsersAllBookings=catchAsyncErrors(async(req,res,next)=>{
   const bookings=await Booking.find({createdBy:req.user._id}).populate(["bookingFor","createdBy"])
   sendResponse(res,200,bookings)
})

   