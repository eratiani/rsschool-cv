let x = document.querySelector(".burgerList2")
function burger() {
    if (x.style.transform === "translateY(-500%)") {
        x.style.transform = "translateY(0)";
        console.log("1");
      
    } else {
    
      x.style.transform = "translateY(-500%)";
      
    }
}
function dissapear() {
    

        x.style.transform = "translateY(-500%)";
   
  }