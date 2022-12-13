
const acceptBtn= document.querySelector(".accept-btn")
const rejectBtn= document.querySelector(".reject-btn")

const handleAcceptBtnClick=(e)=>{
    axios.put(`http://localhost:4000/api/booking/admin/status/${acceptBtn.id}`,{status:"accepted"})
    .then((response)=>{
        if(response.status==200)
        window.location.href="/dashboard/bookings/pending"
    })
    .catch(err=>{
        console.log(err)
    })
}
const handleRejectBtnClick=(e)=>{
    axios.put(`http://localhost:4000/api/booking/admin/status/${rejectBtn.id}`,{status:"rejected"})
    .then((response)=>{
        console.log(response)
        if(response.status==200)
        window.location.href="/dashboard/bookings/pending"
    })
    .catch(err=>{
        console.log(err)
    })
}
acceptBtn.addEventListener("click",handleAcceptBtnClick)
rejectBtn.addEventListener("click",handleRejectBtnClick)