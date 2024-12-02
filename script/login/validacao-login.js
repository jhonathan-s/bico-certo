const btnEnter = document.querySelector('.botao-de-entrar');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setError(index){
        spans[index].style.display = 'block';
        spans[index].style.color = 'rgb(171, 67, 67)';
    }

    function removeError(index){
        spans[index].style.display = 'none';
    }

    // Validação de Email e campo vazio
    function emailValidate() {
        if (campos[0].value.length === 0) {
            // Exibe o erro para campo vazio
            setError(1);
            removeError(0); // Esconde o erro de formato enquanto o campo está vazio
        } else if (!emailRegex.test(campos[0].value)) {
            // Exibe o erro para formato inválido de email
            setError(0);
            removeError(1); // Esconde o erro de campo vazio
        } else {
            // Remove todos os erros se o email for válido
            removeError(0);
            removeError(1);
        }
    }

    // Validação Senha
    function senhaValidate(){
        if(campos[1].value.length === 0)
        {
            setError(2);
        } else {
            removeError(2);
        }
    }

    function userLoginValidate() {
        const userEmail = JSON.parse(localStorage.getItem("userEmail"));
        const userPassword = JSON.parse(localStorage.getItem("userPassword"));

        if (userEmail === campos[0].value && userPassword === campos[1].value) {
            window.location.href = "../../paginas/homepage.html";
        } else if (userEmail != campos[0].value || userPassword != campos[1].value) {
            setError(3);
        } else {
            removeError(3);
        }
    }

    btnEnter.addEventListener('click', (event) => {
        emailValidate();
        userLoginValidate();
        
        const temErro = Array.from(spans).some(span => span.style.display === 'block');

        if (temErro) {
            event.preventDefault();
        }


    });