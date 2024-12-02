// Função para carregar a foto do perfil
function carregarFotoPerfil(event) {
  const imagemPerfil = document.getElementById('imagemPerfil');
  const arquivo = event.target.files[0];
  
  if (arquivo) {
      const leitor = new FileReader();
      
      leitor.onload = function() {
          imagemPerfil.src = leitor.result;
          imagemPerfil.style.display = 'block'; 
      };

      leitor.readAsDataURL(arquivo);
  }
}

// Função para carregar a foto de capa
function carregarFotoCapa(event) {
  const imagemCapa = document.getElementById('imagemCapa');
  const arquivo = event.target.files[0];
  
  if (arquivo) {
      const leitor = new FileReader();
      
      leitor.onload = function() {
          imagemCapa.src = leitor.result;
          imagemCapa.style.display = 'block'; 
      };

      leitor.readAsDataURL(arquivo);
  }
}

// Funções de Validação

function validarFormulario() {
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const celular = document.getElementById('celular').value;
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmar-senha').value;

  // Validação de Nome e Sobrenome
  if (nome === "" || sobrenome === "") {
      alert("Por favor, preencha nome e sobrenome.");
      return false;
  }

  // Validação de celular
  const celularRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
  if (!celular.match(celularRegex)) {
      alert("O número de celular está no formato inválido. Use o formato (XX) XXXXX-XXXX.");
      return false;
  }

  // Validação de Senha e Confirmar Senha
  if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return false;
  }

  // Senha precisa ter ao menos 6 caracteres
  if (senha.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return false;
  }

  return true; // Se todas as validações passarem
}

// Função de validação para celular (formato específico)
function celValidate() {
  const celular = document.getElementById('celular');
  const celularRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
  if (!celular.value.match(celularRegex)) {
      celular.setCustomValidity('Número de celular inválido. Exemplo: (XX) XXXXX-XXXX');
  } else {
      celular.setCustomValidity('');
  }
}

// Função de validação para senha
function senhaValidate() {
  const senha = document.getElementById('senha');
  if (senha.value.length < 6) {
      senha.setCustomValidity('A senha deve ter pelo menos 6 caracteres');
  } else {
      senha.setCustomValidity('');
  }
}

// Função de validação para confirmar senha
function confirmarsenhaValidate() {
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmar-senha').value;
  if (confirmarSenha !== senha) {
      document.getElementById('confirmar-senha').setCustomValidity('As senhas não coincidem');
  } else {
      document.getElementById('confirmar-senha').setCustomValidity('');
  }
}