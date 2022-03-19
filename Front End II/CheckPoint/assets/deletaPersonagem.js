//botão para remover personagem
////como será componente, iniciar-se-á com letra maiúscula.

const BotaoDeleta = () =>{
    const BotaoDeleta = document.createElement('button');//cria botão
    BotaoDeleta.classList.add('delete-button');
    BotaoDeleta.innerText='Deletar';//texto do botao
    BotaoDeleta.addEventListener('click', deletarPersonagem);//escutador de evento
    return BotaoDeleta;//retorna o botão
};

const deletarPersonagem = (event) =>{
    const BotaoDeleta = event.target;//evento ocorre onde o cursor selecionar

    const personagemDeletado = BotaoDeleta.parentElement;// o evento ecoará para o elemento pai

    personagemDeletado.remove();//método de remoção
}

export default BotaoDeleta;