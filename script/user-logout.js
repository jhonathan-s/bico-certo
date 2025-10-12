const logout = document.getElementById('logout');

logout.addEventListener('click', function() {
  // Percorrer todas as chaves do localStorage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    
    // Verificar se a chave começa com 'usuario' (ajuste se necessário)
    if (key.startsWith('usuario')) {
      // Pegar os dados do usuário e transformar em objeto
      const usuarioData = JSON.parse(localStorage.getItem(key));
      
      // Verificar se o usuário está online
      if (usuarioData.online === true) {
        // Alterar o status para offline
        usuarioData.online = false;
        
        // Salvar novamente no localStorage
        localStorage.setItem(key, JSON.stringify(usuarioData));
        
        break; // Para depois de encontrar o usuário online
      }
    }
  }
});