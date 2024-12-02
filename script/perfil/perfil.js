// Função para alternar a exibição do menu de perfil com animação
function toggleProfileMenu() {
    const profileMenu = document.getElementById('profileMenu');
    profileMenu.classList.toggle('show');
}

// Fechar o menu quando clicar fora dele
window.onclick = function(event) {
    const profileMenu = document.getElementById('profileMenu');
    const profileIcon = document.querySelector('.logo img[src*="seu zé.jpeg"]');
    if (!profileMenu.contains(event.target) && !profileIcon.contains(event.target)) {
        profileMenu.classList.remove('show');
    }
}
