const botonMobile = document.querySelector(".menu-mobile");
const botonFormulario = document.querySelector(".boton-formulario")
const botonCerrarFormulario = document.querySelector(".material-symbols-outlined ")

const menuMobile = document.querySelector(".ul-header-mobile")
const formulario = document.querySelector(".formulario")


botonMobile.addEventListener('click', abrirMenu);
botonFormulario.addEventListener('click', abrirFormulario)
botonCerrarFormulario.addEventListener('click', cerrarFormulario)

function abrirMenu() {
    menuMobile.classList.toggle("inactive")
}

function abrirFormulario() {
    formulario.classList.remove("inactive")
}

function cerrarFormulario() {
    formulario.classList.add("inactive")
}