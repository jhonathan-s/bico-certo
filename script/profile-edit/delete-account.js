const deletingMsg = document.querySelector('.deleting-message');
const confirmDeletingAccount = document.querySelector('.confirm-deleting-account');

function deleteAccount() {
    deletingMsg.style.display = 'block';
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    localStorage.removeItem('userRole');
    window.location.href = "../../paginas/login.html"
};

function confirmDeleteAccount() {
    confirmDeletingAccount.style.display = 'flex';
};

function doNotDeleteAccount() {
    confirmDeletingAccount.style.display = 'none';
};