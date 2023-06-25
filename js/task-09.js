function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color')
const colorEl = document.querySelector('.color')
const backgroundEl = document.querySelector('body')

const changeColor = (event) => {
  backgroundEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = backgroundEl.style.backgroundColor
}

btnEl.addEventListener('click', changeColor);