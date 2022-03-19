const form = document.querySelector('#tweet-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const campo = document.querySelector('textarea')
    const texto = campo.value
    const lista = document.querySelector('ul')
    lista.appendChild(document.createElement('li'))
    console.log(texto);
});

const btn = document.querySelector('.btn-form')

let count = 0
btn.addEventListener('mouseover', function(){
    count++
    console.log('É mouseOver', count);
})

btn.addEventListener('mouseout', function(){
    console.log('É mouseOut');
})