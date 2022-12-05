
const openMenu = document.getElementById("open-menu")
const closeMenu = document.getElementById("close-menu")
const mobileMenu = document.getElementById("mobile-menu")
const mobileMenuItem = document.getElementsByClassName("mobile-menu-item")

for(let i = 0; i < mobileMenuItem.length; i++){

   mobileMenuItem[i].addEventListener("click", handleMenuFunc)
    console.log("mobileMenuItem", mobileMenuItem[i])
}

openMenu.addEventListener("click",handleMenuFunc)
closeMenu.addEventListener("click",handleMenuFunc)

function handleMenuFunc(){
    openMenu.classList.toggle("hidden")
    closeMenu.classList.toggle("hidden")
    mobileMenu.classList.toggle("hidden")
}

