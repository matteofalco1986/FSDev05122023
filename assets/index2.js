const counterDisplay = document.querySelector('.counter')
const clearCounterBtn = document.querySelector('.clearCounter');
const interval = 1000;
let counter = 0;

if (!localStorage.getItem('counterValue')) {
    counter = 0;
} else {
    counter = parseInt(localStorage.getItem('counterValue'))
}
counterDisplay.innerHTML = counter;



function count() {
    // Incrementa il contatore
    counter++;
    // Salva il valore incrementato nel local storage
    localStorage.setItem('counterValue', counter);
    // Inietta il valore nell'HTML
    counterDisplay.innerHTML = counter;
}

clearCounterBtn.addEventListener('click', (event) => {
    event.preventDefault();
    counter = 0;
})


// Esegue la funzione count ogni secondo
window.onload = (event) => {
    event.preventDefault();
    setInterval(count, 1000);
}