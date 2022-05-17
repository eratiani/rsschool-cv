let x = document.querySelector(".burgerList2")
let z = document.querySelector(".burger")
x.addEventListener("click", burger);
z.addEventListener("click", burger);
function burger() {
    if (x.style.transform === "translateY(-1500%)") {
        x.style.transform = "translateY(0)";
    

    } else {

        x.style.transform = "translateY(-1500%)";

    }
}

function dissapear() {


    x.style.transform = "translateY(-1500%)";

}
