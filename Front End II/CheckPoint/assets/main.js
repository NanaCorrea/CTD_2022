const criarPersonagem=(event)=>{
    event.preventDefault();

    const listaPersonagem = document.querySelector('[data-list]');//a const recebe a tag div do feed

    const inputNome = document.querySelector('[data-form-nome]');//recebe o input nome
    const inputDescricao = document.querySelector('[data-form-descricao]');//recebe o input descrição
    const inputImg = document.querySelector('[data-form-img]');//recebe o input img

    const valorNome = inputNome.value;//conteudo do input nome
    const valorDescricao = inputDescricao.value;//conteudo do input descrição
    const valorImg = inputImg.value;//conteudo do input img


    const personagem = document.createElement('div');//a const recebe o método de criação de ítens de lista <div>

    personagem.classList.add('card');

    const conteudo =
    `<div class="item">
    <img src="${valorImg}" class="img_face">
    <div class="info_face">
        <h3>${valorNome}</h3>
        <p>${valorDescricao} </p>
    </div>
    </div>`;

    personagem.innerHTML=conteudo;
    personagem.appendChild(BotaoDeleta());

    listaPersonagem.appendChild(personagem);

    inputNome.value="";
    inputDescricao.value="";
    inputImg.value="";
}

const novoPersonagem=document.querySelector('[data-form-button]');

novoPersonagem.addEventListener('click',criarPersonagem);

