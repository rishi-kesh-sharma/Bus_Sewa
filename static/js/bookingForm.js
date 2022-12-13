const bookingForm=document.querySelector('input[type="submit"]')

const handleBook=(e)=>{
    e.preventDefault()
    window.location.href="/"
}

bookingForm.addEventListener("submit",handleBook)

