const express=require("express")
const { isAuthenticatedUser, authorizeRoles, } =require("../../middleware/auth")
const { showAdminDashBoardOverview, showAdminDashBoardAllUser, showAdminDashBoardAllBookings,showAdminDashBoardAllPendingBookings,showAdminDashBoardAllContacts,showAdminDashBoardRegisterBus, showAdminDashBoardAllBuses, showAdminDashBoardAllAcceptedBookings, showAdminDashBoardAllRejectedBookings } = require("../../controller/renderController/dashboard");
const router=express.Router()


//ADMIN DASHBOARD ROUTES

router.route("/").get(authorizeRoles("admin"), showAdminDashBoardOverview)
router.route("/users").get(authorizeRoles("admin"),showAdminDashBoardAllUser)
router.route("/bookings").get(authorizeRoles("admin"),showAdminDashBoardAllBookings)
router.route("/bookings/pending").get(authorizeRoles("admin"),showAdminDashBoardAllPendingBookings)
router.route("/bookings/accepted").get(authorizeRoles("admin"),showAdminDashBoardAllAcceptedBookings)
router.route("/bookings/rejected").get(authorizeRoles("admin"),showAdminDashBoardAllRejectedBookings)
router.route("/buses").get(authorizeRoles("admin"),showAdminDashBoardAllBuses)
router.route("/contacts").get(authorizeRoles("admin"),showAdminDashBoardAllContacts)
router.route("/bus/register").get(authorizeRoles("admin"),showAdminDashBoardRegisterBus)



module.exports=router;
