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

const productsContainer = document.querySelector(".shopping-products");



async function getProducts() {
    const response = await fetch('https://run.mocky.io/v3/e9a7f600-26c2-45eb-bbf2-4803ac17230d');
    const data = await response.json();
    const products = data.products;
    console.log(data);
    products.forEach((item)=> {
        
        const productCard = document.createElement("div");
        productCard.classList.add("product");
        productCard.classList.add(`product${item.id}`);

        const productImg = document.createElement("img");
        productImg.src = "/img/most-popular-image4.jpg";
        productImg.alt = `${item.description}`;

        const p = document.createElement("p");
        p.innerText = `${item.category}`;

        const h6 = document.createElement("h6");
        h6.innerText = `${item.name}`;

        const price = document.createElement("h5");
        price.innerText = `${item.price} $`;

        const sizes = document.createElement("div");
        sizes.classList.add("sizes");

        for(let i =0; i<item.size.length; i++) {
            const button = document.createElement("button");
            button.innerText = `${item.size[i]}`
            sizes.appendChild(button);
        }

        // const colors = document.createElement("div");
        // colors.classList.add("colors");

        // for (let i =0; i < totalColors; i++) {
        //     const color = document.createElement("div");
        //     color.className = item.color;
        //     colors.appendChild(color);
        // }

        const AddToCart = document.createElement("button")
        AddToCart.innerText = "Add To Cart";
        AddToCart.classList.add("add-to-cart")
 


        productsContainer.appendChild(productCard);
        productCard.appendChild(productImg);
        productCard.appendChild(p);
        productCard.appendChild(h6);
        productCard.appendChild(price);
        productCard.appendChild(sizes);
        // productCard.appendChild(colors);
        productCard.appendChild(AddToCart);

        
    })
}

getProducts();