// Autocomplete do Cep
function buscaCep(cep){
    fetch('https://viacep.com.br/ws/'+cep+'/json/')
    .then(response => {
        if(!response.ok){
            console.log("Erro de Conexão")
        }

    return response.json()
    })
    .then(data => {
        console.log(data)
        rua.value = data.logradouro
        estado.value = data.estado
        cidade.value = data.localidade
        bairro.value = data.bairro
    })
    .catch(error => {
        console.log("Erro: ", error)
    })
}

// Formatação Automática do CEP
const cepInput = document.querySelector('#cep');

cepInput.addEventListener('keypress', () => {
    let inputlength = cepInput.value.length;

    if (inputlength === 5) {
        cepInput.value += '-';
    }
});