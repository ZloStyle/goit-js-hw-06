const refs = {
    counter: document.getElementById('counter'),
    value: document.getElementById('value'),
    decrementBtn: counter.querySelector('[data-action=decrement]'),
    incrementBtn: counter.querySelector('[data-action=increment]'),
}

let counterValue = 0;

refs.incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    refs.value.textContent = counterValue;
});

refs.decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    refs.value.textContent = counterValue;
});