var hamburger = document.getElementById("hamburger");
var header = document.getElementById("header");
var nav = document.getElementById("nav");

hamburger.onclick = toggleAll;

function toggleAll(){
    header.classList.toggle("active");
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
};
