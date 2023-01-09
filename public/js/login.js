const username = document.querySelector('#username');
const password = document.querySelector('#password');
const btnCrearLogin = document.querySelector('#btnCrearLogin');

const loginModal = document.querySelector('#login-modal');
const btnClose = document.querySelector('#close');

btnCrearLogin.disabled = true;

username.addEventListener('input', contieneData);
password.addEventListener('input', contieneData);

function contieneData() {
    if(username.value != "" && password.value != "" && username.value.length >= 8 && password.value.length >= 8){
        btnCrearLogin.disabled = false;
    }else{
        btnCrearLogin.disabled = true;
    }
}

if(loginModal){
    btnClose.addEventListener('click',()=>{
        loginModal.remove();
    });
}