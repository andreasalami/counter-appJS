const counterBox = document.querySelector(".counter-box"); // Box che mostra il numero
const minusButton = document.querySelector(".left-button"); // Pulsante -
const plusButton = document.querySelector(".right-button"); // Pulsante +
const resetButton = document.querySelector(".reset-button"); // Pulsante Reset

let count= localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;

const counterDisplay = document.createElement("h2");
counterDisplay.textContent = count;
counterBox.appendChild(counterDisplay);

function updateDisplay() {
    counterDisplay.textContent = count;
    localStorage.setItem("counter", count);
}
// Funzione per il tasto +
function increment() {
    count++;
    updateDisplay();
}
// Funzione per il tasto -
function decrement() {
    count--;
    updateDisplay();
}
// Funzione per il tasto Reset
function resetCounter() {
    count = 0;
    updateDisplay();
}

plusButton.addEventListener("click", increment);
minusButton.addEventListener("click", decrement);
resetButton.addEventListener("click", resetCounter);
