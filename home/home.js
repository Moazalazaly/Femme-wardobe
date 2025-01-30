const linksContainer = document.querySelector(".links-container");
const menuBar = document.querySelector(".menu");

const homeLink = document.querySelector(".homeLink")
const shopLink = document.querySelector(".shopLink")
const aboutLink = document.querySelector(".aboutLink")
const contactLink = document.querySelector(".contactLink")
const navLinks = document.querySelectorAll(".links-container li a");

const cartSideBar = document.querySelector(".right-cart-sidebar")
const cartBtn = document.querySelector(".cart")
const exit = cartSideBar.querySelector(".cart-exit")
const container = document.querySelector(".container")


menuBar.addEventListener("click",() => {
    if(menuBar.classList.contains("fa-x")) {
        linksContainer.style.display = "none";
        menuBar.classList.remove("fa-x")
        menuBar.classList.add("fa-bars")
        menuBar.style.zIndex = "100";
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
    }
})

cartBtn.addEventListener("click",()=> {
    cartSideBar.classList.remove("d-none")
    container.classList.add("container-when-cart")
    cartSideBar.classList.add("show")
})

exit.addEventListener("click",()=> {
    cartSideBar.classList.add("d-none")
    container.classList.remove("container-when-cart")
    cartSideBar.classList.remove("show")
})





//explore bag collection









