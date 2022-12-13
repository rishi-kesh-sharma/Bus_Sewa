const express=require("express")
const {getOverview}=require("../../controller/apiController/admin.js")
const router=express.Router()
// for all
router.route("/overview").get(getOverview)


module.exports=router;