function atualizarUltimaVisita() {
    const dataAtual = new Date();
    const opcoes = { year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoes);

    document.getElementById('ultima-visita').textContent = dataFormatada;
}

window.onload = atualizarUltimaVisita;
