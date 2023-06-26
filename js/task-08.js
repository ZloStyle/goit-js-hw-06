const inputField = document.querySelector('.login-form')
inputField.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
    evt.preventDefault()
    const{ email, password } = evt.currentTarget.elements
    if(!email.value || !password.value) {
        const message = 'You have missed the field'
        alert(message);
    } else {
        const info = {
            email: email.value,
            password: password.value,
        };
        console.log(info);
    }
    inputField.reset()
}