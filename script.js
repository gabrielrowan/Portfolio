

toggleHamburgerMenu();

document.addEventListener("DOMContentLoaded", () =>
{
    setCopywriteYear();
    applyAnimationToIconContainers();

});



function toggleHamburgerMenu()
{
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () =>
    {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

function setCopywriteYear()
{
    let date = new Date();
    let year = date.getFullYear();

    let yearTextNode = document.createTextNode(year);
    document.getElementById("copyright-year").appendChild(yearTextNode);
}

function applyAnimationToIconContainers()
{
    const iconContainers = document.querySelectorAll(".icon-container");
    const delay = 1200;
    const animationDuration = 950;

    iconContainers.forEach((container, index) =>
    {

        setTimeout(() =>
        {
            container.classList.add("active");

            setTimeout(() =>
            {
                container.classList.remove("active");
            }, animationDuration);


        }, delay * (index + 1));

    });
}

