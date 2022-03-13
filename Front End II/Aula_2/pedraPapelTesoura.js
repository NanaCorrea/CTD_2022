let jogador = parseInt(prompt('Digite: 1 para Pedra, 2 para Papel ou 3 para Tesoura'))

while (jogador < 1 || jogador >3) {
    jogador = parseInt(prompt('Digite: 1 para Pedra, 2 para Papel ou 3 para Tesoura'))
}

let computador = parseInt(Math.random() * (4-1)+1)

switch (jogador) {
    case 1:
        if (computador == 1) {
            console.log(`Você jogou ${jogador} e o computador jogou ${computador}. Vocês empataram!`);
        }else if (computador == 2) {
            console.log(`Você jogou ${jogador} e o computador jogou ${computador}. Você perdeu!`);
        }else {
            console.log(`Você jogou ${jogador} e o computador jogou ${computador}. Você ganhou!`);
        }
    break;
    case 2:
        if (computador == 1) {
            console.log(`Você jogou ${jogador} e o computador jogou ${computador}. Você ganhou!`);
        }else if (computador == 2) {
            console.log(`Você jogou ${jogador} e o computador jogou ${computador}. Vocês empataram!`);
        }else {
            console.log(`Você jogou ${jogador} e o computador jogou ${computador}. Você perdeu!`);
        }
    break;
    case 3:
        if (computador == 1) {
            console.log(`Você jogou ${jogador} e o computador jogou ${computador}. Você perdeu!`);
        }else if (computador == 2) {
            console.log(`Você jogou ${jogador} e o computador jogou ${computador}. Você ganhou!`);
        }else {
            console.log(`Você jogou ${jogador} e o computador jogou ${computador}. Vocês empataram!`);
        }
    break;
}