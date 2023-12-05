const formElement = document.querySelector('form')
const inputElement = document.querySelector('input');
const saveBtn = document.querySelector(".save");
const deleteBtn = document.querySelector(".delete");
const displayedText = document.querySelector('p');
const defaultValue = 'Qui apparirà il tuo nome';

// Se non c'è nulla nel local storage
if (!localStorage.getItem('name')){
    // Mostra il testo di default
    displayedText.innerHTML = defaultValue;
} else {
    // Mostra il testo associato alla chiave 'name'
    displayedText.innerHTML = localStorage.getItem('name');
}


formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    let userName = inputElement.value;
    if (userName !== ''){
        localStorage.setItem("name", userName)
        displayedText.innerHTML = localStorage.getItem('name');
    } else {
        window.alert("The field is empty. Please add a valid name");
    }
})

deleteBtn.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.clear();
    displayedText.innerHTML = defaultValue;
    inputElement.value = '';
})