const toggleTag=document.querySelector(".toggle")
const firstLineTag=document.querySelector(".firstLine")
const secondLineTag=document.querySelector(".secondLine")
const thirdLineTag=document.querySelector(".thirdLine")
const ShowMenuBarTag=document.querySelector(".ShowMenuBar")
const showcaseTag=document.querySelector(".showcase")

toggleTag.addEventListener("click",(event)=>{
   if(toggleTag.classList.contains("CloseButton")){
        secondLineTag.classList.remove("removeLine2")
        thirdLineTag.classList.remove("rotateLine3")    
        firstLineTag.classList.remove("rotateLine1")
        toggleTag.classList.remove("CloseButton")
        showcaseTag.classList.remove("ShowMenuBar")
   }else{
        secondLineTag.classList.add("removeLine2")
        thirdLineTag.classList.add("rotateLine3")    
        firstLineTag.classList.add("rotateLine1")
        toggleTag.classList.add("CloseButton")
        showcaseTag.classList.add("ShowMenuBar")
   }
})
