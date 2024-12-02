// Formatação Automática do Celular
const celularInput = document.querySelector('#celular');

celularInput.addEventListener('keypress', () => {
    let inputlength = celularInput.value.length;

    if (inputlength === 0) {
        celularInput.value += '(+55)';
    }

    if (inputlength < 6) {
        celularInput.value += ' ';
    }

    if (inputlength === 8) {
        celularInput.value += ' ';
    }

    if (inputlength === 14) {
        celularInput.value += '-';
    }

    console.log(inputlength);
});