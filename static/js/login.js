

const loginBtn=document.querySelector(".login-btn")
const passwordField=document.querySelector(".password")
const emailField=document.querySelector(".email")
const handleLoginClick=(e)=>{

    e.preventDefault()
    console.log(passwordField)
    const password=passwordField.value;
    const email=emailField.value

    axios.post("http://localhost:4000/api/auth/login",{password,email})
.then((response)=>{
    if(response.status==200){
        console.log(response)
        window.location.href="/"
    }
})
.catch((err)=>{
    window.alert("cannot login user!!!")
    console.log(err)

})
    
}

loginBtn.addEventListener("click",handleLoginClick);


// axios.get("http://localhost:4000/api/auth/logout")
// .then((response)=>{
//     if(response.status==200){
//         window.location.href("/login")
//     }
// })
// .catch((err)=>{
//     window.alert("cannot logout user!!!")
//     console.log(err)

// })