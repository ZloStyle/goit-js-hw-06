// const inputEl = document.querySelector('#validation-input');
// const dataLength = document.querySelector('data-length');
// const checkValueLength = (event) => {
//     const currentValue = event.currentTarget.value
//     if (Number(dataLength) === Number(currentValue.length)) {
//         inputEl.classList.add('valid')
//     }
//     else {
//         inputEl.classList.add('invalid')
//     }
//     console.log(currentValue.length)
// }

// inputEl.addEventListener('blur', checkValueLength)
// console.log(checkValueLength)

// const inputField = document.getElementById('validation-input');
// const dataLength = inputField.getAttribute('data-length');
// const inputLength = inputField.value.length;

// console.log(inputField)
// console.log(dataLength)
// console.log(inputLength)
// inputField.addEventListener('blur', () =>
//     inputLength === Number(dataLength)
//     ? inputField.classList.add('valid')
//     : inputField.classList.add('invalid'));



const input = document.querySelector('#validation-input');
const inputLength = input.dataset.length; 
input.addEventListener('blur', (evt) => {
    input.classList.remove('valid' , 'invalid'); 
    if (evt.currentTarget.value.length !== Number(inputLength)) {
        input.classList.add('invalid');
    } else {
        input.classList.add('valid')
    }
});