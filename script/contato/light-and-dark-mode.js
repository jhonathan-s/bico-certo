function DarkMode() {
    const body = document.body;
    const iconeLtm = document.getElementById('btnLightMode');
    const iconeDm = document.getElementById('btnDarkMode');
    const logomarcaLt = document.getElementById('logomarca');
    const logomarcaDm = document.getElementById('logomarca-dark-mode');
    const botoesAumentarZoom = document.querySelectorAll('.acessibilidade-mais');
    const botoesAbaixarZoom = document.querySelectorAll('.acessibilidade-menos');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');
    const botaoEnviar = document.querySelectorAll('.botao-de-enviar');
    const botaoVoltarPaginaInicial = document.querySelectorAll('.botao-de-voltar-a-pagina-inicial');
    const acessibilityPanel = document.querySelector('.acessibility-panel');

    body.classList.toggle('dark-mode');
    body.style.backgroundColor = '#121212';
    acessibilityPanel.style.backgroundColor = 'rgba(199, 200, 202, 0.090)';
    iconeDm.style.display = 'none';
    iconeLtm.style.display = 'block';
    logomarcaLt.style.display = 'none';
    logomarcaDm.style.display = 'block';
    nome.style.color = 'white';
    nome.style.background = "url('../imagens/icones-pagina-registro/icone-nome-dm.svg') no-repeat left";
    nome.style.backgroundPosition = '10px';
    nome.style.backgroundSize = '14px';
    email.style.color = 'white';
    email.style.background = "url('../imagens/icones-pagina-registro/icone-email-dm.svg') no-repeat left";
    email.style.backgroundPosition = '10px';
    email.style.backgroundSize = '14px';
    mensagem.style.color = 'white';
    botaoEnviar[0].style.backgroundImage = 'url(../imagens/icone-botoes/paper-plane-solid-dm.svg)';
    botaoVoltarPaginaInicial[0].style.backgroundImage = 'url(../imagens/icone-botoes/right-to-bracket-solid-dm.svg)';
    

    const botaoAumentarZoom = botoesAumentarZoom[0];
    const botaoAbaixarZoom = botoesAbaixarZoom[0];

    botaoAumentarZoom.style.display = 'none';
    botaoAbaixarZoom.style.display =  'none';

    const botaoAumentarZoomLt = botoesAumentarZoom[1];
    const botaoAbaixarZoomDm = botoesAbaixarZoom[1];

    botaoAumentarZoomLt.style.display = 'block';
    botaoAbaixarZoomDm.style.display = 'block';

}

function LightMode() {
    const body = document.body;
    const iconeLtm = document.getElementById('btnLightMode');
    const iconeDm = document.getElementById('btnDarkMode');
    const logomarcaLt = document.getElementById('logomarca');
    const logomarcaDm = document.getElementById('logomarca-dark-mode');
    const botoesAumentarZoom = document.querySelectorAll('.acessibilidade-mais');
    const botoesAbaixarZoom = document.querySelectorAll('.acessibilidade-menos');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');
    const botaoEnviar = document.querySelectorAll('.botao-de-enviar');
    const botaoVoltarPaginaInicial = document.querySelectorAll('.botao-de-voltar-a-pagina-inicial');
    const acessibilityPanel = document.querySelector('.acessibility-panel');


    body.classList.toggle('dark-mode');
    body.style.backgroundColor = 'white';
    acessibilityPanel.style.backgroundColor = 'rgba(23, 50, 118, 0.11)';
    iconeDm.style.display = 'block';
    iconeLtm.style.display = 'none';
    logomarcaLt.style.display = 'block';
    logomarcaDm.style.display = 'none';
    nome.style.color = 'black';
    nome.style.background = "url('../imagens/icones-pagina-registro/icone-nome.svg') no-repeat left";
    nome.style.backgroundPosition = '10px';
    nome.style.backgroundSize = '14px';
    email.style.color = 'black';
    email.style.background = "url('../imagens/icones-pagina-registro/icone-email.svg') no-repeat left";
    email.style.backgroundPosition = '10px';
    email.style.backgroundSize = '14px';
    mensagem.style.color = 'black';
    botaoEnviar[0].style.backgroundImage = 'url(../imagens/icone-botoes/paper-plane-solid.svg)';
    botaoVoltarPaginaInicial[0].style.backgroundImage = 'url(../imagens/icone-botoes/right-to-bracket-solid.svg)';
    

    const botaoAumentarZoom = botoesAumentarZoom[0];
    const botaoAbaixarZoom = botoesAbaixarZoom[0];

    botaoAumentarZoom.style.display = 'block';
    botaoAbaixarZoom.style.display =  'block';

    const botaoAumentarZoomLt = botoesAumentarZoom[1];
    const botaoAbaixarZoomDm = botoesAbaixarZoom[1];

    botaoAumentarZoomLt.style.display = 'none';
    botaoAbaixarZoomDm.style.display = 'none';

}