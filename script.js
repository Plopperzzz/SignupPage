const btn = document.querySelector("btn");

btn.addEventListener('click', e => {
    const pass = document.querySelector('input[name="user_password"]');
    const confirm = document.querySelector('input[name="user_conpassword"]');

    console.log(pass);
    console.log(confirm);
})