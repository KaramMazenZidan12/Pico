document.getElementById("searchInput").addEventListener("keyup", (event) => {
    let username = event.target.value.toLowerCase();
  let allNamesDOMCollection = document.getElementsByClassName("col-md-4")
  
  for(let i = 0; i < allNamesDOMCollection.length; i++){
     let y=document.getElementsByName("name");
        const currentName = allNamesDOMCollection[i].y.toLowerCase()
        if(currentName.includes(username)){
          allNamesDOMCollection[i].style.display = "block"
        }else{
          allNamesDOMCollection[i].style.display = "none"
        }
    }
})



