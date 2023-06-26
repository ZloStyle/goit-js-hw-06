// const textEl = document.querySelector('span#text')
// const inputEl = document.querySelector('input#font-size-control')
// const valueEl = inputEl.value;
// textEl.classList.add('abra')

// console.log(inputEl);
// console.log(textEl);
// const changeSize = () => {

//     textEl.style.fontSize = `${valueEl}px`;
//     console.log(inputEl.value);
//     console.log(textEl.style.fontSize);
// }

// inputEl.addEventListener('input', changeSize);

const inputEl = document.querySelector('input#font-size-control')
const textEl = document.querySelector('span#text')
const valueEl = inputEl.value;
const changeSize = () => {
    const valueEl = inputEl.value;
    textEl.style.fontSize = `${valueEl}px`;
}
inputEl.addEventListener('input',changeSize)