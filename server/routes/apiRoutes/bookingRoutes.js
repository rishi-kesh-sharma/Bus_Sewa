const express=require("express");
const {  authorizeRoles, isAuthorizedUser } = require("../../middleware/auth");
const {getAllBookings,createBooking,getBooking,deleteBooking,updateBookingStatus,getAllRejectedBookings,getAllAcceptedBookings,getUsersAllBookings, getAllPendingBookings}=require("../../controller/apiController/booking.js")
const router=express.Router()

// for admin
router.route("/admin/all").get(authorizeRoles("admin"),getAllBookings);
router.route("/admin/pending/all").get(authorizeRoles("admin"),getAllPendingBookings);
router.route("/admin/rejected/all").get(authorizeRoles("admin"),getAllRejectedBookings);
router.route("/admin/accepted/all").get(authorizeRoles("admin"),getAllAcceptedBookings);
router.route("/admin/:bookingId").get(authorizeRoles("admin"),getBooking)
router.route("/admin/status/:bookingId").put(authorizeRoles("admin"),updateBookingStatus)
router.route("/admin/:bookingId").delete(authorizeRoles("admin",),deleteBooking)


// for authorized user
router.route("/me/:userId/:bookingId").get(authorizeRoles("client"),isAuthorizedUser,getBooking);
router.route("/").post(authorizeRoles("client"),createBooking)
router.route("/me/all").get(getUsersAllBookings)
router.route("/me/:userId/:bookingId").delete(authorizeRoles("client"),isAuthorizedUser,deleteBooking)








module.exports=router
