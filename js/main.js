let myBurgerIcon = document.querySelector("header .container .links .icon")
let optionsList = document.querySelector("header .container .links ul")

myBurgerIcon.onclick = function(){
    optionsList.style.display = "block"
}
optionsList.onmouseleave = function(){
    optionsList.style.display = "none"
}