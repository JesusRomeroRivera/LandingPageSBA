window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
    var line = document.querySelector(".header-line");
    line.classList.toggle("sticky", window.scrollY > 0);
})

const $estableButton = document.querySelector(".tecnico-buttonRegister");
const $clienteButton = document.querySelector(".cliente-buttonRegister");
const $registroTecnico = document.querySelector(".establecimiento");

const $headerSection = document.querySelector(".header");
const $carrouselSection = document.querySelector(".carrousel");
const $nosotros = document.querySelector(".nosotros");
const $servicios = document.querySelector(".servicios");
const $contacto = document.querySelector(".contacto");
const $descargar = document.querySelector(".descargar");
const $registro = document.querySelector(".registro");
const $footer = document.querySelector('footer');

const $body = document.querySelector(".body");

let auxTecnico = true;

$estableButton.addEventListener("click", () => {
    if(auxTecnico) auxTecnico = false;
    else $registroTecnico.classList.toggle("not-active");
    $registroTecnico.classList.toggle("is-active");
    $contacto.classList.toggle("blur");
    $headerSection.classList.toggle("blur");
    $carrouselSection.classList.toggle("blur");
    $nosotros.classList.toggle("blur");
    $servicios.classList.toggle("blur");
    $descargar.classList.toggle("blur");
    $registro.classList.toggle("blur");
    $footer.classList.toggle("blur");
    $body.classList.toggle("blur");
});

let auxCliente = true;

$clienteButton.addEventListener("click", () => {
    if(auxCliente) auxCliente = false;
    else $registroTecnico.classList.toggle("not-active");
    $registroTecnico.classList.toggle("is-active");
    $contacto.classList.toggle("blur");
    $headerSection.classList.toggle("blur");
    $carrouselSection.classList.toggle("blur");
    $nosotros.classList.toggle("blur");
    $servicios.classList.toggle("blur");
    $descargar.classList.toggle("blur");
    $registro.classList.toggle("blur");
    $footer.classList.toggle("blur");
    $body.classList.toggle("blur");
});

const $backButton = document.querySelector(".establecimiento-back-text");

$backButton.addEventListener("click", () => {
    $registroTecnico.classList.toggle("is-active");
    $registroTecnico.classList.toggle("not-active");
    $contacto.classList.toggle("blur");
    $headerSection.classList.toggle("blur");
    $carrouselSection.classList.toggle("blur");
    $nosotros.classList.toggle("blur");
    $servicios.classList.toggle("blur");
    $descargar.classList.toggle("blur");
    $registro.classList.toggle("blur");
    $footer.classList.toggle("blur");
    $body.classList.toggle("blur");
})






