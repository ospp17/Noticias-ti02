const boataoAbrir = document.querySelector(".header-mobile > button")
const boataoFechar = document.querySelector(".header-mobile nav button")

const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")

boataoAbrir.addEventListener('click', abrirMenu)
boataoFechar.addEventListener('click', fecharMenu)

function abrirMenu( ) {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}