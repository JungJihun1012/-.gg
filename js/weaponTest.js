const nav = document.querySelector("nav");
const navBt = document.querySelector(".contents_menuBt");
const logo = document.querySelector(".logo");
const navBack_Bt = document.querySelector(".nav_li");
const navBt2 = document.querySelector(".startBt");

navBt.addEventListener("click", ()=>{
    nav.style.width = "100vw";
    navBt.style.display = "none";
    logo.style.display = "none";
});
navBt2.addEventListener("click", ()=>{
    nav.style.width = "100vw";
    navBt.style.display = "none";
    logo.style.display = "none";
});

navBack_Bt.addEventListener("click", ()=>{
    nav.style.width = "0px";
    navBt.style.display = "block";
    logo.style.display = "block";
});
nav.addEventListener("mouseleave", ()=>{
    nav.style.width = "0px";
    navBt.style.display = "block";
    logo.style.display = "block";
});
