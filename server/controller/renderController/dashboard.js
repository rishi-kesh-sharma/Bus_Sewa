// const axios=require("axios")
const axios=require("axios")

const showAdminDashBoardOverview=(req,res,next)=>{

    
    axios.get(`http://localhost:4000/api/admin/overview`,{withCredentials:true,headers:{
        Cookie: `token=${req.cookies.token}`
    } })
    .then((response)=>{
        const overview=response.data
        res.render("./pages/dashboard",{user:req.user,overview,id:"overview"})
    })
    .catch((err)=>{
        console.log(err)
    })

}
const showAdminDashBoardAllUser=(req,res,next)=>{
   axios.get(`http://localhost:4000/api/user/admin/all`,{withCredentials:true,headers:{
    Cookie: `token=${req.cookies.token}`
} })
   .then((response)=>{
    const {data}=response
    console.log(response.data)
    res.render("./pages/dashboard",{user:req.user,users:data,id:"users"})
})
.catch((err)=>{
    console.log(err)
})
}
const showAdminDashBoardAllBookings=(req,res,next)=>{
   axios.get(`http://localhost:4000/api/booking/admin/all`,
       {
            withCredentials:true,
            headers:{
            Cookie: `token=${req.cookies.token}`
        } 
     })
   .then((bookingResponse)=>{
       const {bookings}=bookingResponse.data
    //    console.log(bookings)
    res.render("./pages/dashboard",{user:req.user,bookings,id:"bookings"})
       
})
.catch((err)=>{
    console.log(err)
})


}

const showAdminDashBoardAllPendingBookings=(req,res,next)=>{
   axios.get(`http://localhost:4000/api/booking/admin/pending/all`,
       {
            withCredentials:true,
            headers:{
            Cookie: `token=${req.cookies.token}`
        } 
     })
   .then((bookingResponse)=>{
       const {bookings}=bookingResponse.data
    //    console.log(bookings)
    res.render("./pages/dashboard",{user:req.user,bookings,id:"pendingBookings"})
       
})
.catch((err)=>{
    console.log(err)
})


}

const showAdminDashBoardAllAcceptedBookings=(req,res,next)=>{
   axios.get(`http://localhost:4000/api/booking/admin/accepted/all`,
       {
            withCredentials:true,
            headers:{
            Cookie: `token=${req.cookies.token}`
        } 
     })
   .then((bookingResponse)=>{
       const {bookings}=bookingResponse.data
       console.log(bookingResponse.data)
    //    console.log(bookings)
    res.render("./pages/dashboard",{user:req.user,bookings,id:"acceptedBookings"})
       
})
.catch((err)=>{
    console.log(err)
})


}
const showAdminDashBoardAllRejectedBookings=(req,res,next)=>{
   axios.get(`http://localhost:4000/api/booking/admin/rejected/all`,
       {
            withCredentials:true,
            headers:{
            Cookie: `token=${req.cookies.token}`
        } 
     })
   .then((bookingResponse)=>{
       const {bookings}=bookingResponse.data
    //    console.log(bookings)
    res.render("./pages/dashboard",{user:req.user,bookings,id:"rejectedBookings"})
       
})
.catch((err)=>{
    console.log(err)
})


}
const showAdminDashBoardAllBuses=(req,res,next)=>{
   axios.get(`http://localhost:4000/api/bus/all`,
       {
            withCredentials:true,
            headers:{
            Cookie: `token=${req.cookies.token}`
        } 
     })
   .then((response)=>{
    const {buses}=response.data
    res.render("./pages/dashboard",{user:req.user,buses,id:"buses"})
       
})
.catch((err)=>{
    console.log(err)
})


}
const showAdminDashBoardAllContacts=(req,res,next)=>{
    axios.get(`http://localhost:4000/api/contact/admin/all`,
    {
         withCredentials:true,
         headers:{
         Cookie: `token=${req.cookies.token}`
     } 
    })
    .then((response)=>{
        const {contacts,next,prev,skip}=response.data
    res.render("./pages/dashboard",{user:req.user,contacts,id:"contacts"})
    })
    .catch((err)=>{
    console.log(err)
    })
}


const showAdminDashBoardRegisterBus=(req,res,next)=>{
    res.render("./pages/dashboard",{user:req.user,id:"registerBus"})
   }

   
  
module.exports={showAdminDashBoardOverview,showAdminDashBoardAllUser,showAdminDashBoardAllBookings,showAdminDashBoardAllPendingBookings,showAdminDashBoardAllAcceptedBookings,showAdminDashBoardAllRejectedBookings,showAdminDashBoardAllBuses,showAdminDashBoardAllContacts,showAdminDashBoardRegisterBus}


