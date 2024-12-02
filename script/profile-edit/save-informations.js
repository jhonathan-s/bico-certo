const savedInformationsMessage = document.querySelector('.information-saved');
const userEmailForm = document.getElementById('email');
const userPasswordForm = document.getElementById('senha');

function saveInformations() {
    savedInformationsMessage.style.display = 'block';

    //Email
    const userEmail = JSON.stringify(userEmailForm.value);
    localStorage.setItem("userEmail", userEmail);
    

    //Password
    const userPassword = JSON.stringify(userPasswordForm.value);
    localStorage.setItem("userPassword", userPassword);
}