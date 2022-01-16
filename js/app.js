'use strict'

//Variables
const popUp = document.querySelector('#popup');
const contenedorPopUp = document.querySelector('.contenedor-popup');
const vectorX = document.querySelector('#vector-x');



popUp.addEventListener('click', () =>{
    contenedorPopUp.style.display = 'block';
});

vectorX.addEventListener('click', () =>{
    contenedorPopUp.style.display = 'none';
})

