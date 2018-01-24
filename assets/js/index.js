'use strict';

// Creamos una variable para el contenedor de mi demo
const imageContainer = document.getElementById('container');
const image = document.createElement('img'); // Creamos un elemento img para la imagen de prueba
image.setAttribute('id', 'myImage'); // Asignamos atributo id a la imagen
image.setAttribute('src', 'assets/img/img2.jpg');
imageContainer.appendChild(image); // Al contenedor le asignamos el hijo imagen

// Variable para el botón con filtro sepia
const btnSepia = document.createElement('button');
const textBtnSepia = document.createTextNode('Sepia');
btnSepia.setAttribute('class', 'btn');
btnSepia.appendChild(textBtnSepia);
imageContainer.appendChild(btnSepia);

// Variable para el botón con filtro blanco y negro
const btnBlackAndWhite = document.createElement('button');
const textBlackAndWhite = document.createTextNode('Blanco y negro');
btnBlackAndWhite.setAttribute('class', 'btn');
btnBlackAndWhite.appendChild(textBlackAndWhite);
imageContainer.appendChild(btnBlackAndWhite);

// Variable para el botón con filtro saturación
const btnSaturation = document.createElement('button');
const textBtnSaturation = document.createTextNode('Saturacion');
btnSaturation.setAttribute('class', 'btn');
btnSaturation.appendChild(textBtnSaturation);
imageContainer.appendChild(btnSaturation);

// Variable con función de filtro sepia para aplicar a nuestra imagen
const sepia = btnSepia.addEventListener('click', () => {  
  image.setAttribute('style', 'filter: sepia(75%)');
});

// Variable con función de filtro blanco y negro para aplicar a nuestra imagen
const blackAndWhite = btnBlackAndWhite.addEventListener('click', () => {  
  image.setAttribute('style', 'filter: grayscale(100%)');
});

// Variable con función de filtro saturación para aplicar a nuestra imagen
const saturation = btnSaturation.addEventListener('click', () => {  
  image.setAttribute('style', 'filter: saturate(180%)');
});