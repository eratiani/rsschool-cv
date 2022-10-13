let x = document.querySelector(".burgerList2")
let y = document.querySelector(".burgerList")
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
const smoothScroll = (element)=>{
    const el = element.getBoundingClientRect();
    element.scrollIntoView({
        behavior: "smooth"
      });
}
y.addEventListener("click", (e)=>{
    e.preventDefault();
    smoothScrollTar(e)   

});
x.addEventListener("click", (e)=>{
    e.preventDefault();
    smoothScrollTar(e)
})
function smoothScrollTar(e) {
    if (Number(e.target.classlist.contains("1"))) {
        const targ = document.getElementById("header")
        smoothScroll(targ);
    } else if(Number(e.target.classlist.contains("2"))) {
        const targ = document.getElementById("mySkills")
        return smoothScroll(targ);
    } else if(Number(e.target.classlist.contains("3"))) {
        const targ = document.getElementById("codeExample")
        return smoothScroll(targ);
    } else if(Number(e.target.classlist.contains("4"))) {
        const targ = document.getElementById("experience")
        smoothScroll(targ);
    } else if(Number(e.target.classlist.contains("5"))) {
        const targ = document.getElementById("contact")
        smoothScroll(targ);
    } else if(Number(e.target.classlist.contains("6"))) {
        const target = document.getElementById("other")
        smoothScroll(target);
    } 
}