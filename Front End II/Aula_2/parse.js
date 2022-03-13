// parseInt(). Esta função analisa uma sequência de texto e devolve em um número. 

parseInt("22"); 
parseInt(prompt("Introduza idade"));

let a = parseInt("22"); 
let b = parseInt(prompt("Introduza idade")); 
let c = parseInt("22"+"150"); 
let d = parseInt(22+150) 
let e = parseInt(22+parseInt("150")); 
let f = parseInt(22.55); 
console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 
console.log(e); 
console.log(f); 

// parseFloat() 
// Aqui entra em jogo esta outra função, que tem o mesmo objetivo que a anterior, mas neste caso devolve os números decimais que existem. 

console.log(parseFloat(22.34)); 
console.log(parseFloat(22.3456284)); 

// NaN 
// A propriedade NaN nos indica que o valor não é um número (Not A Number), portanto, isto causaria um erro se quiséssemos realizar qualquer operação aritmética com este valor. 

let edad = parseInt(prompt("Introduza sua idade")); 

while (isNaN(edad) == true) {
    edad = parseInt(prompt("Introduza sua idade. A idade deve ser um número"))
}

function idade(edad) {
    if(edad>18){ 
        console.log("É maior de idade"); 
    }else{ 
        console.log("É menor de idade"); 
    }       
}

idade(edad)