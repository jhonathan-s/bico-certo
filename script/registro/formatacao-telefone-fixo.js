// Formatação Automática do Telefone Fixo
const telefonefixoInput = document.querySelector('#telefone-fixo');

telefonefixoInput.addEventListener('keypress', () => {
    let inputlength = telefonefixoInput.value.length;

    if (inputlength === 0) {
        telefonefixoInput.value += '(+55)';
    }

    if (inputlength < 6) {
        telefonefixoInput.value += ' ';
    }

    if (inputlength === 8) {
        telefonefixoInput.value += ' ';
    }

    if (inputlength === 13) {
        telefonefixoInput.value += '-';
    }

    console.log(inputlength);
});