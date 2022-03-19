//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
let card = document.getElementById('tarjeta')

card.classList.add('card')

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
let img = document.getElementById('logo')

img.setAttribute('src', "https://www.youtube.com/img/desktop/yt_1200.png")

//3- Quitarle al titulo la clase que le está dando un formato feo
let titulo = document.querySelector('h1')

titulo.classList.remove('titulo-feo')

//4- Chequear si el link a youtube posee o no el atributo href
const youtube = document.getElementById('link_youtube')

console.log(youtube.hasAttribute('href'));
//5- Obtener el href del link a wikipedia y mostrarlo por consola
const wikipedia = document.getElementById('link_wikipedia')

console.log(wikipedia.getAttribute('href'));