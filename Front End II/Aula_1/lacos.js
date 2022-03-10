// ----- FOR -----
// Permite que você execute repetidamente um bloco de código

let n = 4
for (var i = 0; i < n; i++) {
    // código para executar n vezes (4)
}

for(inicial; condicao; final) {}
//INICIAL: Este código é executado no início único do loop, normalmente uma variável é declarada conforme mostrado no exemplo
//CONDIÇÃO: Sempre que o bloco de código for fechado termina, esta condição é verificada, e se for verdadeira, o loop termina e o código abaixo continua
//FINAL: Uma ação a ser executada a cada vez que o bloco a ser repetido é finalizado, a variável usada na condição é comumente modificada


// ----- WHILE -----
//Seu comportamento é semelhante a um lopp 'for', mas o bloco continuará executando indefinidamente enquanto a condição for verdadeira

let n = 1
while (n < 3) {
    //código que será executado
}

while(condicao) {}
//CONDIÇÃO: Condição a ser avaliada antes de cada execução do bloco, se nunca se tornar falsa o loop permanecerá em execução indefinidamente.


// ----- DO ... WHILE -----
//Permite que você execute um bloco de código, desde que uma condição seja verdadeira. Ao contrário de While, a condição é avaliada no final de cada execução, que resulta na execção do bloco fechado pelo menos uma vez.

do {
    // código que será executado
}while ( n < 3)