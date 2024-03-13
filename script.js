let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
};

//alert("Hola este es mi Javascript");

//condicional
let contenidoTitulo = "Nombre";
let titulo = document.querySelector(".seccion-2 .sobre-mi h2");
titulo.innerHTML = contenidoTitulo;

let textoTitulo = titulo.innerText;

console.log(textoTitulo);

if (textoTitulo == "Nombre") {
  titulo.innerHTML = "Vamos";
} else {
  console.log("no se cumple");
}

//funciones
let nombre = "André";
let ciudad = "ciudad capital";
let gusto = "mirar películas";

let parrafo = document.querySelector(".seccion-2 .sobre-mi h3");

function cambiarTexto(nombre, ciudad, gusto) {
  let contenido = `Me llamo ${nombre} y vivo en ${ciudad}, Perú. Me apasiona ${gusto} y cuidar plantas.`;

  return contenido;
}
parrafo.innerText = cambiarTexto("Josue", ciudad, gusto);
