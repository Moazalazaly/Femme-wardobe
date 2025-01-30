///////////////////////////// NAVBAR Responsive /////////////////////////////////

const linksContainer = document.querySelector(".links-container");
const menuBar = document.querySelector(".fa-solid");

const homeLink = document.querySelector(".homeLink")
const shopLink = document.querySelector(".shopLink")
const aboutLink = document.querySelector(".aboutLink")
const contactLink = document.querySelector(".contactLink")
const navLinks = document.querySelectorAll(".links-container li a");

const navBarContainer = document.querySelector(".container");


menuBar.addEventListener("click",() => {
    if(menuBar.classList.contains("fa-x")) {
        linksContainer.style.display = "none";
        menuBar.classList.remove("fa-x")
        menuBar.classList.add("fa-bars")
        menuBar.style.zIndex = "100";
        navBarContainer.style.height = "50vh";
    }else {
        linksContainer.style.display = "flex";
        menuBar.classList.remove("fa-bars")
        menuBar.classList.add("fa-x");
        menuBar.style.zIndex = "100";
        navLinks.forEach((link)=> {
            if(location.href.includes(link.getAttribute("name")) ) {
                link.classList.add("active");
            }
        })
        navBarContainer.style.height = "100vh";
    }
})
///////////////////////////// NAVBAR Responsive /////////////////////////////////