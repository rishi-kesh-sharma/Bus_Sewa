const axios=require("axios")


const showHomePage=(req,res,next)=>{

            axios.get(`http://localhost:4000/api/bus/all`,
            {
                withCredentials:true,
                headers:{
                Cookie: `token=${req.cookies.token}`
            } 
        })
            .then((response)=>{
            const {buses}=response.data
                res.render('./pages/home',{authenticated:req.authenticated,user:req.user,buses})
                  
        })
        .catch((err)=>{
        console.log(err)
        })
    
   
}

const showRegisterPage=async(req,res,next)=>{
    res.render("./pages/register")
}

const showLoginPage=(req,res,next)=>{

    res.render("./pages/login")
}

const showBookingPage=(req,res,next)=>{
    res.render("./pages/bookingForm",{user:req.user,busId:req.params.busId})
      
}

const showProfilePage= (req,res,next)=>{

    axios.get("http://localhost:4000/api/booking/me/all",{
        withCredentials:true,
        headers:{
            Cookie:`token=${req.cookies.token}`
        }
       })
       .then((response)=>{
             const {data}=response
             
                    res.render("./pages/profile",{user:req.user,bookings:data})

            })
            .catch((err)=>{
                console.log(err)
            })
}
   
const showDashboardPage= (req,res,next)=>{
   
    res.render("./pages/dashboard",{user:req.user})
}


module.exports={showHomePage,showRegisterPage,showLoginPage,showProfilePage,showBookingPage,showDashboardPage}