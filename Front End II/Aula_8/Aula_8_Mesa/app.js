const formulario = document.querySelector('form')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
})

window.onload = function () {
    alert('Página carregada!')
}

const h1 = document.querySelector('h1')

h1.onmouseover = function() {
    h1.style.color = 'red'
}

h1.onmouseout = function() {
    h1.style.color = 'black'
}

let input = document.querySelector('input')
let contador = 0

input.onkeyup = function () {
    contador ++
    const body = document.querySelector('body')
    let p = document.createElement('p')
    let texto = document.createTextNode(input.value)
    let textoContador = document.createTextNode(contador)
    p.appendChild(texto)
    body.appendChild(p)
    p.appendChild(textoContador)
    body.appendChild(p)
}
