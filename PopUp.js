'use strict';

const popUpBackground = document.getElementById('popUp-background');
const openPopUp = document.getElementById('openPopUp');
const popUp = document.getElementById('popUp');

// Вариант 1
document.addEventListener('click', (event) => {
    if (event.target === openPopUp) {
        event.preventDefault();
        popUp.classList.add('active');
    }
    else if (event.target === popUpBackground) {
        popUp.classList.remove('active');
    }
})

// Вариант 2
document.onclick = (event) => {
    if (event.target === openPopUp) {
        event.preventDefault();
        popUp.classList.add('active');
    }
    else if (event.target === popUpBackground) {
        popUp.classList.remove('active');
    }
}

// Вариант 3
document.addEventListener('mousedown', (event) => {
    if (event.target === openPopUp) {
        popUp.classList.add('active');
    }
    else if (event.target === popUpBackground) {
        popUp.classList.remove('active');
    }
})
