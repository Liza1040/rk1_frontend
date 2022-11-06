'use strict';

const popUpBackground = document.getElementById('popUp-background');
const openPopUp = document.getElementById('openPopUp');
const popUp = document.getElementById('popUp');

// Вариант 1
openPopUp.addEventListener('click', (event) => {
    event.preventDefault();
    popUp.classList.add('active');
})

document.addEventListener('click', (event) => {
    if (event.target === popUpBackground) {
        popUp.classList.remove('active');
    }
})

// Вариант 2
openPopUp.onclick = (event) => {
    event.preventDefault();
    popUp.classList.add('active');
}

document.onclick = (event) => {
    if (event.target === popUpBackground) {
        popUp.classList.remove('active');
    }
}