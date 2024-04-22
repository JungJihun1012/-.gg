const nav = document.querySelector("nav");
const navBt = document.querySelector(".contents_menuBt");
const logo = document.querySelector(".logo");
const navBt2 = document.querySelector(".startBt");

navBt.addEventListener("click", ()=>{
    navBt.style.transform = "rotate( 1turn )";
    nav.style.width = "100%";
});
navBt2.addEventListener("click", ()=>{
    navBt.style.transform = "rotate( 1turn )";
    nav.style.width = "100%";
});

nav.addEventListener("mouseleave", ()=>{
    nav.style.width = "0px";
});


