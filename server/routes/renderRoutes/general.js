const express=require("express")
const { isAuthenticatedUser, isNotAuthenticatedUser, authorizeRoles, ensureAuthenticationStatus } = require("../../middleware/auth")
const { showHomePage,showRegisterPage,showLoginPage,showProfilePage, showBookingPage } = require("../../controller/renderController/general")
const router=express.Router()

//routes for server side rendering/get routes

router.route("/").get(ensureAuthenticationStatus,showHomePage)
router.route("/register").get(showRegisterPage)
router.route("/login").get(isNotAuthenticatedUser,showLoginPage)
router.route("/book/:busId").get(isAuthenticatedUser,authorizeRoles("user"), showBookingPage)
router.route("/profile").get(isAuthenticatedUser, authorizeRoles("user"),showProfilePage)
router.route("/dashboard").get(isAuthenticatedUser, authorizeRoles("admin"),showProfilePage)

module.exports=router

