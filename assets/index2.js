const counterDisplay = document.querySelector('.counter')
const clearCounterBtn = document.querySelector('.clearCounter');
const interval = 1000;
let counter = 0;

// Controlla se l'utente sta aprendo la pagina o refresha
if (!sessionStorage.getItem('counterValue')) {
    counter = 0;
} else {
    counter = parseInt(sessionStorage.getItem('counterValue'))
}
// Displays the counter on screen
counterDisplay.innerHTML = counter;

function count() {
    // Incrementa il contatore
    counter++;
    // Salva il valore incrementato nel local storage
    sessionStorage.setItem('counterValue', counter);
    // Inietta il valore nell'HTML
    counterDisplay.innerHTML = counter;
}

// Restarts the counter
clearCounterBtn.addEventListener('click', (event) => {
    event.preventDefault();
    counter = -1;
})


// Esegue la funzione count ogni secondo
window.onload = (event) => {
    event.preventDefault();
    setInterval(count, interval);
}