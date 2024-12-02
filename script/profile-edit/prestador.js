const userRole = localStorage.getItem('userRole');
const prestadorOptions = document.getElementById('prestador-opcoes');
const whatsAppLink = document.getElementById('whatsapp');

console.log(userRole === 'prestador')

if (userRole === 'prestador') {
    prestadorOptions.style.display = 'block';
} else {
    whatsAppLink.style.display = 'none';
}