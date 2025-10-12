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

    // Percorre todas as chaves do localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);

        // Verifica se a chave corresponde ao padrão 'usuario'
        if (chave.startsWith('usuario')) {
            const usuario = JSON.parse(localStorage.getItem(chave));

            // Descriptografa a senha usando Base64
            const senhaDescriptografada = atob(usuario.senha);

            // Verifica se email e senha coincidem
            if (usuario.email === inputEmail && senhaDescriptografada === inputSenha) {
                usuario.online = true; // Marca o usuário como online
                localStorage.setItem(chave, JSON.stringify(usuario)); // Atualiza no localStorage
                usuarioEncontrado = true;

                // Redireciona para a homepage
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
