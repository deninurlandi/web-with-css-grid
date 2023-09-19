const ul = document.querySelector("nav ul");
const checkbox = document.querySelector(".menu-toggle input");

checkbox.addEventListener("click", function(){
    ul.classList.toggle("slide")
});