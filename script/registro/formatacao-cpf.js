// Formatação Automática do CPF
const cpfInput = document.querySelector('#cpf');

cpfInput.addEventListener('keypress', () => {
    let inputlength = cpfInput.value.length;

    if (inputlength === 3 || inputlength === 7) {
        cpfInput.value += '.';
    }
    
    if (inputlength === 11) {
        cpfInput.value += '-';
    }
});