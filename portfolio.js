function Mymenufunction() {
    var menuBtn = document.getElementById("Mynavmenu");
    menuBtn.classList.toggle("responsive");
}


const body = document.querySelector("body"),
   toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark");
    
});


