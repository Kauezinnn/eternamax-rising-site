// Categoria selecionada no momento (Padrão: todas)
let categoriaAtual = 'todas';

function selecionarCategoria(categoria, elementoBotao) {
    // Atualiza a categoria atual
    categoriaAtual = categoria;

    // Atualiza a classe 'active' nos botões para destacar o selecionado
    let botoes = document.querySelectorAll('.cat-btn');
    botoes.forEach(btn => btn.classList.remove('active'));
    elementoBotao.classList.add('active');

    // Refiltra os comandos visíveis
    filtrarComandos();
}

function filtrarComandos() {
    let inputBusca = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('command-card');

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let categoriaCard = card.getAttribute('data-category');
        
        let nomeComando = card.querySelector('.cmd-name').innerText.toLowerCase();
        let descricao = card.querySelector('.cmd-desc').innerText.toLowerCase();

        // Verifica se o comando pertence à categoria selecionada (ou se "todas" está ativo)
        let pertenceCategoria = (categoriaAtual === 'todas' || categoriaCard === categoriaAtual);
        
        // Verifica se atende ao texto da pesquisa
        let atendeBusca = nomeComando.includes(inputBusca) || descricao.includes(inputBusca);

        // Se passar pelos dois filtros, exibe o comando; caso contrário, esconde
        if (pertenceCategoria && atendeBusca) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    }
}