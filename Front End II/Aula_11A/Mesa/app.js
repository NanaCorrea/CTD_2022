const form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    let nome = document.getElementById('nome').value

    let sobrenome = document.getElementById('sobrenome').value
    event.preventDefault()
    console.log(nome.trim());
    console.log(sobrenome.toLowerCase());
    console.log(nome.concat(" ", sobrenome).toUpperCase());
    console.log(nome.concat(" ", sobrenome).replaceAll('a', '@').replaceAll('e', '3'))
})