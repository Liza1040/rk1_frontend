'use strict';

const popUpBackground = document.getElementById('popUp-background');
const openPopUp = document.getElementById('openPopUp');
const popUp = document.getElementById('popUp');

openPopUp.addEventListener('click', (event) => {
    event.preventDefault();
    popUp.classList.add('active');
})

document.addEventListener('click', (event) => {
    if (event.target === popUpBackground) {
        popUp.classList.remove('active');
    }
})

openPopUp.onclick = (event) => {
    event.preventDefault();
    popUp.classList.add('active');
}

document.onclick = (event) => {
    if (event.target === popUpBackground) {
        popUp.classList.remove('active');
    }
}