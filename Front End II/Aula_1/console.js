console.log('Escreve uma mensagem no console')
console.error('Escreve um erro no console')
console.warn('Escreve uma advertência no consol')

// -- TABLE --
// Table é outra maneira de exibir um objeto ou array no console de uma forma um pouco mais visual. Por exemplo:
console.table( 'Escreve uma tabela no console')

let meuObjeto= { 
    mensagem: "Mensagem de texto", 
    utilidade: "Prova de JS" 
    }; 

let meuArray= ['Primeira mensagem do array', 'Segunda mensagem do array', 'Terceira mensagem do array'] 
    console.table(meuObjeto); 
    console.table(meuArray); 

alert("Este é um alerta.");