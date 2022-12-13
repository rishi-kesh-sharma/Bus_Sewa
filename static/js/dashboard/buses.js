
const removeBtns=document.querySelectorAll("td>i.remove-btn")
const editBtns=document.querySelectorAll("td>i.edit-btn")


// request edit action
const requestEditAction=(id,editedBusData)=>{
    axios.put(`http://localhost:4000/api/bus/admin/${id}`,editedBusData).then((response)=>{
        if(response.status==200){

            window.location.reload()
        }
    }).catch((err)=>{
        console.log(err)
    })
}

// request remove action
const requestRemoveAction=(id)=>{
    axios.delete(`http://localhost:4000/api/bus/admin/${id}`).then((response)=>{
        console.log(response.data)
        if(response.status==200){
            window.location.reload()
        }
        
    }).catch((err)=>{
        console.log(err)
    })
}


removeBtns.forEach((removeBtn)=>{
    const handleRemoveBtnClick=(e)=>{
        requestRemoveAction(removeBtn.id)
    }

    removeBtn.addEventListener("click",handleRemoveBtnClick)

})


editBtns.forEach((editBtn)=>{
    
const handleEditBtnClick=(e)=>{
    const busDataFields=editBtn.parentNode.parentNode.querySelectorAll("td.bus-data")

  const busDataArray= [...busDataFields].map((busDataField)=>{
    
      return  busDataField.innerText.replace("/n","").trim()
    })
    
    const busData={name:busDataArray[0],bus:busDataArray[1],capacity:busDataArray[2],status:busDataArray[3],description:busDataArray[4]}

    requestEditAction(editBtn.id,busData)
    
}
    editBtn.addEventListener("click",handleEditBtnClick)
})


