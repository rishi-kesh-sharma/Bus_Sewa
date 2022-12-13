const express=require("express");
const {createBus,getAllBus, deleteBus,getSingleBus, updateBus}=require("../../controller/apiController/bus.js");
const { authorizeRoles, isAuthenticatedUser } = require("../../middleware/auth");

const router=express.Router()


// for admin
router.route("/admin").post(isAuthenticatedUser,authorizeRoles("admin"),createBus)
router.route("/all").get(getAllBus)
router.route("/admin/:busId").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteBus)
router.route("/admin/:busId").get(isAuthenticatedUser,authorizeRoles("admin"),getSingleBus)
router.route("/admin/:busId").put(isAuthenticatedUser,authorizeRoles("admin"),updateBus)

module.exports=router;