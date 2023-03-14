
// passo 1: dar um jeito de pegar o elemento HTML dos botões 
const botoesCarossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

// passo 2: dar um jeito de identificar o clique do usuário no botão 
botoesCarossel.forEach((botao, i) =>  {
    botao.addEventListener('click', function () {
        // passo 3: desmarcar o botão selecionado no anterior
        desativarBotaoSelecionado()
        // passo 4: marcar o botão clicado como se estivesse selecionado 
        marcarBotaoSelecionado(botao)
        // passo 5: esconder a imagem de fundo anterior
        esconderImagemAtiva()
        // passo 6: fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarImagemFundo(i)
        
    })
})





function mostrarImagemFundo(i) {
    imagens[i].classList.add('ativa')
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado')
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa')
    imagemAtiva.classList.remove('ativa')
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}

