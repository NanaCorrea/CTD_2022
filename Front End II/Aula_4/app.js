let numeros = document.querySelectorAll('#numeros li')

for(let i = 0;i < numeros.length; i++) {
    console.log(numeros[i].innerText);
}

for(let i = 0;i < numeros.length; i++) {
    numeros[i].innerText += 'Teste';
}