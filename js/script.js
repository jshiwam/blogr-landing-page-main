let items = document.querySelectorAll(".item");
let menu = document.querySelector(".menu");
let borgir = document.getElementById("borgir");

menu.addEventListener('mouseover',()=>{
    console.log("moved in");
    for(let item of items){
        
        if((item.matches(":hover") || item.lastElementChild.matches(":hover")) && (!item.lastElementChild.classList.contains("appear"))){
            item.lastElementChild.classList.add("appear");
        }else{
          item.lastElementChild.classList.remove("appear");
        }
        console.log(item.lastElementChild.classList);
    }        
});

for(let item of items){
    item.addEventListener('mouseout',()=>{
        console.log("moved out");
        item.lastElementChild.classList.remove("appear");
    })
}    

borgir.addEventListener('click',()=>{
  if(borgir.src.match("./images/icon-hamburger.svg")){
    borgir.src="./images/icon-close.svg";
    menu.classList.remove("disappear");
  }else{
    borgir.src="./images/icon-hamburger.svg";
    menu.classList.add("disappear");
  }
});

let width = window.matchMedia("(max-width: 700px)")
width.addListener((e)=>{
  if(e.matches){
    menu.classList.add("disappear"); 
  }else{
    menu.classList.remove("disappear");
  }
});