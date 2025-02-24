const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;
        if (value === 'C') {
            currentInput = '';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = 'Erreur';
            }
        } else {
            currentInput += value;
        }
        display.value = currentInput;
    });
});