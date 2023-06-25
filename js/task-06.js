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
// // console.log(checkValueLength)

const inputField = document.getElementById('validation-input');
const dataLength = inputField.getAttribute('data-length');
const inputLength = inputField.value.length;

inputField.addEventListener('blur', () =>
    inputLength === Number(dataLength)
    ? inputField.classList.add('valid')
    : inputField.classList.add('invalid'));