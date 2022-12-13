
const profileNavBtn=document.querySelector("#profile-nav-btn")
const bookingsNavBtn=document.querySelector("#bookings-nav-btn")
const editProfileNavBtn=document.querySelector("#edit-profile-nav-btn")
const changePasswordNavBtn=document.querySelector("#change-password-nav-btn")

const profileCard=document.querySelector(".profile-card")
const bookingsCard=document.querySelector(".bookings-card")
const editProfileCard=document.querySelector(".edit-profile-card")
const changePasswordCard=document.querySelector(".change-password-card")

profileNavBtn.addEventListener("click",(e)=>{


    if(!profileNavBtn.classList.contains("active")){
        profileNavBtn.classList.add("active")
        bookingsNavBtn.classList.remove("active")
        editProfileNavBtn.classList.remove("active")
        changePasswordNavBtn.classList.remove("active")
    }
    if(!profileCard.classList.contains("active")){
        profileCard.classList.add("active")
        bookingsCard.classList.remove("active")
        editProfileCard.classList.remove("active")
        changePasswordCard.classList.remove("active")
    }
})

bookingsNavBtn.addEventListener("click",(e)=>{


    if(!bookingsNavBtn.classList.contains("active")){
        bookingsNavBtn.classList.add("active")
        profileNavBtn.classList.remove("active")
        editProfileNavBtn.classList.remove("active")
        changePasswordNavBtn.classList.remove("active")
    }
    if(!bookingsCard.classList.contains("active")){
        bookingsCard.classList.add("active")
        profileCard.classList.remove("active")
        editProfileCard.classList.remove("active")
        changePasswordCard.classList.remove("active")
    }
})
editProfileNavBtn.addEventListener("click",(e)=>{
    
    if(!editProfileNavBtn.classList.contains("active")){
        editProfileNavBtn.classList.add("active")
        bookingsNavBtn.classList.remove("active")
        profileNavBtn.classList.remove("active")
        changePasswordNavBtn.classList.remove("active")
    }
    if(!editProfileCard.classList.contains("active")){
        editProfileCard.classList.add("active")
        bookingsCard.classList.remove("active")
        profileCard.classList.remove("active")
        changePasswordCard.classList.remove("active")
    }
})
changePasswordNavBtn.addEventListener("click",(e)=>{
    
    if(!changePasswordNavBtn.classList.contains("active")){
        changePasswordNavBtn.classList.add("active")
        bookingsNavBtn.classList.remove("active")
        profileNavBtn.classList.remove("active")
        editProfileNavBtn.classList.remove("active")
    }
    if(!changePasswordCard.classList.contains("active")){
        changePasswordCard.classList.add("active")
        bookingsCard.classList.remove("active")
        editProfileCard.classList.remove("active")
        profileCard.classList.remove("active")
    }
})


// edit and remove functionalities


const removeBtns=document.querySelectorAll("td>i.remove-btn")
const editBtns=document.querySelectorAll("td>i.edit-btn")










// save edited profile request

const saveProfileBtn=document.querySelector("#save-profile-btn")

const nameField=document.querySelector("#name")
const addressField=document.querySelector("#address")
const emailField=document.querySelector("#email")
const phoneField=document.querySelector("#phone")


    
    // save user profile request or update user profile

    const requestUpdateProfile=(nameValue,emailValue,phoneValue,addressValue)=>{
    
        const userData={name:nameValue,email:emailValue,phone:phoneValue,address:addressValue}
       
        axios.put("http://localhost:4000/api/user/me",userData)
        .then((response)=>{
         console.log(response)
         alert("user updated successfully")
         window.location.href="/profile"
        })
        .catch((err)=>{
         console.log(err)
        })
           
       }
       
const validateUser=(nameValue,emailValue,phoneValue,addressValue)=>{
if(!nameValue||!emailValue||!phoneValue||!addressValue)
{
    window.alert("fields are not filled completely")
    
}

else{
    requestUpdateProfile(nameValue,emailValue,phoneValue,addressValue)
}
}
const handleSubmit=(e)=>{
    e.preventDefault()

    let nameValue=nameField.value;
    let emailValue=emailField.value;
    let phoneValue=phoneField.value;
    let addressValue=addressField.value;
    
    validateUser(nameValue,emailValue,phoneValue,addressValue)



}
saveProfileBtn.addEventListener("click",handleSubmit)



// change password request

const changePasswordRequestBtn=document.querySelector("#change-password-btn")
const oldPasswordField=document.querySelector("#old-password")
const newPasswordField=document.querySelector("#new-password")
const confirmPasswordField=document.querySelector("#confirm-password")

const requestChangePassword=(oldPassword,newPassword,confirmPassword)=>{
    const data={oldPassword,newPassword,confirmPassword}
    axios.put("/api/user/me/password",data)
    .then((response)=>{
        if(response.status==200){
          window.alert("password updated successfully")
          window.location.href="/profile"
        }
        else{
            window.alert("cannot update password !!try again")
        }
    })
    .catch((err)=>{
        console.log(err)
    })

}

const handleChangePassword=(e)=>{

    e.preventDefault()

    const oldPassword=oldPasswordField.value;
    const newPassword=newPasswordField.value;
    const confirmPassword=confirmPasswordField.value;
    if(!oldPassword || !newPassword || !confirmPassword){
        alert("fields not filled properly")
    }
    else if(newPassword!=confirmPassword){
        alert("passwords not matching")
    }
    else{

       const isSure= window.confirm("are you sure you want to update password?")

       isSure && requestChangePassword(oldPassword,newPassword,confirmPassword)
    }

}

changePasswordRequestBtn.addEventListener("click",handleChangePassword)


