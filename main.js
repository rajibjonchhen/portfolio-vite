
// const openMenu = document.getElementById("open-menu")
// const closeMenu = document.getElementById("close-menu")
// const mobileMenu = document.getElementById("mobile-menu")
// const mobileMenuItem = document.getElementsByClassName("mobile-menu-item")

// for(let i = 0; i < mobileMenuItem.length; i++){
    
//     mobileMenuItem[i].addEventListener("click", handleMenuFunc)
//     console.log("mobileMenuItem", mobileMenuItem[i])
// }

// openMenu.addEventListener("click",handleMenuFunc)
// closeMenu.addEventListener("click",handleMenuFunc)

// function handleMenuFunc(){
//     openMenu.classList.toggle("hidden")
//     closeMenu.classList.toggle("hidden")
//     mobileMenu.classList.toggle("hidden")
// }

const bulletPoint = document.getElementsByClassName ("bullet-point")
console.log("bulletPoint",bulletPoint)

for(let i = 0; i < bulletPoint.length; i++){
    console.log("i",i)
    bulletPoint[i].innerHTML = `
    <svg width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="2.5" fill="#494c4e" fill-rule="evenodd"/>
    </svg>
    `
}