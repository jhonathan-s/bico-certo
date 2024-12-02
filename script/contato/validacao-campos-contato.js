const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (event) => {
    nameValidate();
    emailValidate();
    mensagemValidate();

    const temErro = Array.from(spans).some(span => span.style.display === 'block');

    if (temErro) {
        event.preventDefault();
    }
});

    function setError(index){
        spans[index].style.display = 'block';
        spans[index].style.color = 'rgb(171, 67, 67)';
    }

    function removeError(index){
        spans[index].style.display = 'none';
    }

    // Validação de nome
    function nameValidate() {
        if(campos[0].value.length < 1)
        {
            setError(0);
        }
        else
        {
            removeError(0);
        }
    }

    // Validação de Email
    function emailValidate() {
        if (emailRegex.test(campos[1].value))
        {
            removeError(1);
        }
        else
        {
            setError(1);
        }
    }

    // Validação de Mensagem
    function mensagemValidate() {
        if(campos[2].value.length < 1)
        {
            setError(2);
        }
        else
        {
            removeError(2);
        }
    }