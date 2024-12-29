

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

const words = [`Console.Write("Hello")`, `Console.Log("Hello")`, `print("Hello")`, `std::cout << "Hello"`, `echo "Hello"`];
let index = 0;
let animate = true;

const changingWordElement = document.querySelector('.changing-word');

function changeWord()
{

    if (animate)
    {
        // Fade out
        changingWordElement.style.opacity = 0;

        // Wait for the fade-out to complete, then change the word and fade back in
        setTimeout(() =>
        {
            changingWordElement.textContent = words[index];
            index = (index + 1) % words.length;

            // Fade in
            changingWordElement.style.opacity = 1;
        }, 1000); // Match this delay to the transition duration
    }
}

// Change the word every 3 seconds
setInterval(changeWord, 3000);


// Initialize with the first word
changeWord();

const toggleButton = () =>
{
    let pausePlayButton = document.querySelector(".pause-play-button");
    const currentSvg = pausePlayButton.querySelector("svg");

    if (currentSvg.classList.contains("pause"))
    {
        animate = false;
        currentSvg.outerHTML = `<svg class="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M382.09-308.65 651.35-480 382.09-651.35v342.7Zm98.19 220.78q-81.19 0-152.62-30.62-71.44-30.62-125-84.17-53.55-53.56-84.17-124.95Q87.87-399 87.87-480.46q0-81.45 30.62-152.38 30.62-70.94 84.17-124.5 53.56-53.55 124.95-84.17 71.39-30.62 152.85-30.62 81.45 0 152.38 30.62 70.94 30.62 124.5 84.17 53.55 53.56 84.17 124.72 30.62 71.16 30.62 152.34 0 81.19-30.62 152.62-30.62 71.44-84.17 125-53.56 53.55-124.72 84.17-71.16 30.62-152.34 30.62Zm-.28-83q129.04 0 219.09-90.04 90.04-90.05 90.04-219.09 0-129.04-90.04-219.09-90.05-90.04-219.09-90.04-129.04 0-219.09 90.04-90.04 90.05-90.04 219.09 0 129.04 90.04 219.09 90.05 90.04 219.09 90.04ZM480-480Z"/></svg>`
    } else
    {
        animate = true;
        currentSvg.outerHTML = `<svg class="pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M356.41-334.09H432v-291.82h-75.59v291.82Zm171.59 0h75.59v-291.82H528v291.82ZM480.28-87.87q-81.19 0-152.62-30.62-71.44-30.62-125-84.17-53.55-53.56-84.17-124.95Q87.87-399 87.87-480.46q0-81.45 30.62-152.38 30.62-70.94 84.17-124.5 53.56-53.55 124.95-84.17 71.39-30.62 152.85-30.62 81.45 0 152.38 30.62 70.94 30.62 124.5 84.17 53.55 53.56 84.17 124.72 30.62 71.16 30.62 152.34 0 81.19-30.62 152.62-30.62 71.44-84.17 125-53.56 53.55-124.72 84.17-71.16 30.62-152.34 30.62Zm-.28-83q129.04 0 219.09-90.04 90.04-90.05 90.04-219.09 0-129.04-90.04-219.09-90.05-90.04-219.09-90.04-129.04 0-219.09 90.04-90.04 90.05-90.04 219.09 0 129.04 90.04 219.09 90.05 90.04 219.09 90.04ZM480-480Z"/></svg>`
    }

}

const pausePlayButton = document.querySelector(".pause-play-button");
pausePlayButton.addEventListener("click", toggleButton);