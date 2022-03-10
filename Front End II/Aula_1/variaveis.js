// ------------ VAR -------------
// Declara uma variável global ou no escopo de uma função

var varGlobal = 'valor inicial'

function nome() {
    // escopo da função
    console.log(varGlobal); // => 'valor inicial'

    if (condicao) {
        //escopo do bloco
        var varFuncao = 'Estou declarada em uma fução'
        console.log(varGlobal); // => 'valor inicial'

        varGlobal = 'outro valor'
    }

    console.log(varFuncao); // => 'Estou declarada em uma Função'
    
}

console.log(varGlobal); // 'outro valor'
console.log(varFuncao); // erro: não está declarada


// ------------ LET -------------
// Declara uma variável dentro do escopo de um bloco

let letGlobal = 'valor inicial'

function nome1() {
    // escopo da função
    console.log(letGlobal); // => 'valor inicial'

    if (condicao) {
        //escopo do bloco
        let letFuncao = 'Estou declarada em uma fução'
        console.log(letGlobal); // => 'valor inicial'

        letGlobal = 'outro valor'
    }

    console.log(letFuncao); // => error não está declarada
    //let faz com que a variável esteja disponível somente dentro do if
    
}

console.log(letGlobal); // 'outro valor'
console.log(letFuncao); // erro: não está declarada

// ------------ CONST -------------
// Declara uma constante no escopo de um bloco

const constGlobal = 'valor inicial'

function nome2() {
    // escopo da função
    console.log(letGlobal); // => 'valor inicial'

    if (condicao) {
        //escopo do bloco
        const constFuncao = 'Estou declarada em uma fução'
        console.log(constGlobal); // => 'valor inicial'

        constGlobal = 'outro valor' // erro a const não pode ser modificada
    }

    console.log(constFuncao); // => error não está declarada
    //const se comporta igual ao let em termos de alcance
    
}

console.log(letGlobal); // 'valor inicial'
console.log(letFuncao); // erro: não está declarada

// ---------- TIPOS DE VARIÁVEIS ----------

let minhaVariavel = 'Hello World' // string
let minhaVariavel1 = 22 // number
let minhaVariavel2 = false // boolean
let minhaVariavel3 // undefined
let minhaVariavel4 = {nome: 'meu nome'} // objeto
let minhaVariavel5 = null // É um tipo de objeto especial
let minhaVariavel6 = function() {let doSomething} // é uma função
// Você pode verificar esses tipos usando typeOf myVariable => string

