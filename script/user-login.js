// Seleciona o parágrafo
const username = document.getElementById('username');

// Percorre todas as chaves do localStorage
for (let i = 0; i < localStorage.length; i++) {
  const chave = localStorage.key(i);

  // Verifica se a chave começa com "usuario"
  if (chave.startsWith("usuario")) {
    const usuarioString = localStorage.getItem(chave);

    try {
      const usuario = JSON.parse(usuarioString);

      // Verifica se o campo online é true
      if (usuario.online === true) {
        username.textContent = `${usuario.login}`;
        break; // Para ao encontrar o primeiro usuário online
      }
    } catch (e) {
      console.error(`Erro ao ler o usuário ${chave}:`, e);
    }
  }
}