const catchAsyncErrors = require("../../middleware/catchAsyncErrors");
const Booking = require("../../model/booking");
const Bus = require("../../model/bus");
const User = require("../../model/user");
const { sendResponse } = require("../../utils/sendResponse");

exports.getOverview=catchAsyncErrors(async(req,res,next)=>{
    const totalUsers=(await User.find()).length
    const totalBuses=(await Bus.find()).length
    const totalBookings=(await Booking.find()).length
    const totalPendingAppointments=(await Booking.find({status:"pending"})).length
    const totalSuccessfulBookings=(await Booking.find({status:"accepted"})).length
    const totalRejectedBookings=(await Booking.find({status:"rejected"})).length
    
    const overview=[{name:"Total Costumers",value:totalUsers},{name:"Total Bookings",value:totalBookings},{name:"Total Buses",value:totalBuses},{name:"Total Pending Bookings",value:totalPendingAppointments},{name:"Total Successful Bookings", value:totalSuccessfulBookings},{name:"Total Rejected Bookings",value:totalRejectedBookings}]
    sendResponse(res,200,overview)
})