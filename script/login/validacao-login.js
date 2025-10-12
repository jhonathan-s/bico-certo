const btnEnter = document.querySelector('.botao-de-entrar');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(index) {
    spans[index].style.display = 'block';
    spans[index].style.color = 'rgb(171, 67, 67)';
}

function removeError(index) {
    spans[index].style.display = 'none';
}

// Validação de Email e campo vazio
function emailValidate() {
    if (campos[0].value.length === 0) {
        setError(1);
        removeError(0);
    } else if (!emailRegex.test(campos[0].value)) {
        setError(0);
        removeError(1);
    } else {
        removeError(0);
        removeError(1);
    }
}

// Validação Senha
function senhaValidate() {
    if (campos[1].value.length === 0) {
        setError(2);
    } else {
        removeError(2);
    }
}

// Validação do Login do Usuário
function userLoginValidate() {
    const inputEmail = campos[0].value;
    const inputSenha = campos[1].value;

    let usuarioEncontrado = false;

    // Primeiro: deslogar todos os usuários (setar online = false)
    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);

        if (chave.startsWith('usuario')) {
            const usuario = JSON.parse(localStorage.getItem(chave));
            usuario.online = false;
            localStorage.setItem(chave, JSON.stringify(usuario));
        }
    }

    // Segundo: tentar logar com o usuário informado
    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);

        if (chave.startsWith('usuario')) {
            const usuario = JSON.parse(localStorage.getItem(chave));
            const senhaDescriptografada = atob(usuario.senha);

            if (usuario.email === inputEmail && senhaDescriptografada === inputSenha) {
                usuario.online = true;
                localStorage.setItem(chave, JSON.stringify(usuario));
                usuarioEncontrado = true;

                window.location.href = "../../paginas/homepage.html";
                break;
            }
        }
    }

    if (!usuarioEncontrado) {
        setError(3);
    } else {
        removeError(3);
    }
}

// Evento de clique no botão de login
btnEnter.addEventListener('click', (event) => {
    emailValidate();
    senhaValidate();
    userLoginValidate();

    const temErro = Array.from(spans).some(span => span.style.display === 'block');

    if (temErro) {
        event.preventDefault();
    }
});
