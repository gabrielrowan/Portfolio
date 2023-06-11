let date = new Date();
let year = date.getFullYear();

let yearTextNode = document.createTextNode(year);
document.getElementById("copyright-year").appendChild(yearTextNode);


const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})