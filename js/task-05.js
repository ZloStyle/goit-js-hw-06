const inputText = document.querySelector("#name-input");
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', (event) => {
    outputText.textContent = event.currentTarget.value;

    if(outputText.textContent == '' )
         outputText.innerHTML = 'Anonymous'
    
})

