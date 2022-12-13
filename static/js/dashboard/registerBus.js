
const registerBusBtn=document.querySelector("#register-bus-btn")

const inputFields=document.querySelectorAll(".input-field")

// request register bus

const requestRegisterBus=(busData)=>{
    axios.post("http://localhost:4000/api/bus/admin",busData)
    .then((response)=>{
      if(response.status==200){
        alert("bus registered!!!")

      }else{
        alert("cannot register bus!!!")
      }
    })
    .catch((err)=>{
        alert("cannot register bus")
        console.log(err)
    })
}

const handleRegisterBusBtn=(e)=>{

    e.preventDefault()

    const busDataArray=[...inputFields].map((inputField)=>{
        return inputField.value.trim()
    })
    const busData={name:busDataArray[0],busNo:busDataArray[1],capacity:busDataArray[2],description:busDataArray[3]}

    requestRegisterBus(busData)
}
registerBusBtn.addEventListener("click",handleRegisterBusBtn)