const inputEl = document.querySelector('input#font-size-control')
const textEl = document.querySelector('span#text')
const valueEl = inputEl.value;

console.log(inputEl);
console.log(textEl);
const changeSize = () => {

    textEl.style.fontSize = `${valueEl}px`;
    console.log(inputEl.value);
    console.log(textEl.style.fontSize);
}

inputEl.addEventListener('input', changeSize);