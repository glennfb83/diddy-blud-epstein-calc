const calcInput = document.getElementById('calc-input');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === '=') {
            calcInput.value = eval(calcInput.value);
        } else {
            calcInput.value += value;
        }
    });
});

document.getElementById('button-reset').addEventListener('click', () => {
    calcInput.value = '0';
});
