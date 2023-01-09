const username = document.querySelector('#username');
const password = document.querySelector('#password');
const btnCrearSignup = document.querySelector('#btnCrearSignup');

const signupModal = document.querySelector('#signup-modal');
const btnClose = document.querySelector('#close');

btnCrearSignup.disabled = true;

username.addEventListener('input', contieneData);
password.addEventListener('input', contieneData);

function contieneData() {
    if(username.value != "" && password.value != "" && username.value.length >= 8 && password.value.length >= 8){
        btnCrearSignup.disabled = false;
    }else{
        btnCrearSignup.disabled = true;
    }
}

if(signupModal){
    btnClose.addEventListener('click',()=>{
        signupModal.remove();
    });
}