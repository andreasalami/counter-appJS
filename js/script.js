let counter = 0;

function updateCounter() {
    document.querySelector(".counter-box").innerText = counter.toString().padStart(2, '0');
}

function increment() {
    counter++;
    updateCounter();
}

function decrement() {
    counter--;
    updateCounter();
}

function resetCounter() {
    counter = 0;
    updateCounter();
}


document.addEventListener("DOMContentLoaded", updateCounter);