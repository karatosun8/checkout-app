const taxRate = 0.18;
const shippingPrice = 25.99;
const freeShippingPrice = 3000;

//localStorage vs. sessionStorage
window.addEventListener("load",()=>{
    localStorage.setItem("taxRate",taxRate)
    localStorage.setItem("shippingPrice",shippingPrice)
    localStorage.setItem("freeShippingPrice",freeShippingPrice)
})


const navbarList = document.querySelector(".nav__list")
const productList = document.querySelector("div.main__product-painel")

//capturing
navbarList.addEventListener("click",()=>{
    if(e.target.className == "nav__list--btn"){
        alert("remove btn click")

    }
})