// Prática Integradora
// Objetivo


// Desenvolver um script que permita somar um array de números consecutivos, de forma que se some o primeiro número com o segundo e o imprima através do console. 
// Depois, temos que pegar este resultado e somar o terceiro número, e assim por diante, até termos terminado de percorrer todo o array.

let numeros = [1,2,4,8]

let soma = numeros[0]

for(i=1; i< numeros.length; i++) {
    console.log(`${soma} + ${numeros[i]}`);
    soma = soma + numeros[i]
}

let resultado = numeros.reduce((anterior, atual) => anterior + atual)

console.log(resultado);