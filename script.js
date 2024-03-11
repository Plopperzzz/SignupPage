console.log("HELKL");
const btn = document.querySelector('button[type="submit"]');
console.log(btn);

btn.addEventListener('click', e => {
    const pass = document.querySelector('input[name="user_password"]');
    const confirm = document.querySelector('input[name="user_conpassword"]');

    if(pass !== confirm)
    {
        pass.classList.remove('input');
        pass.classList.add('error');
        return;
    }
})

function checkpass(){
    const pass = document.querySelector('input[name="user_password"]');
    const confirm = document.querySelector('input[name="user_conpassword"]');
    const errorPhrase = document.querySelector('.pass-error');

    if(pass.value !== confirm.value)
    {
        confirm.classList.add('error');
        errorPhrase.textContent = "Passwords do not match";
    }
    else{
        confirm.classList.remove('error');
        errorPhrase.textContent = "";
    }
}