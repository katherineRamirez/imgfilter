'use strict';

/**
  Funcion que permite manejar una imagen segun el ID del elemento contenedor de la imagen.
  Los valores permitidos son:
    sepia
    saturarion
    blackAndWhite
    @param null
    @return null
*/
function loadFilter() {
  const sepia = document.getElementById('sepia');
  // si existe el elemento sepia entonces ejecuta el JS que aplica el atributo style al elemento
  if (sepia !== null) {
	  sepia.setAttribute('style', 'filter: sepia(75%)');
  } else {
    console.log('No existe el elemento sepia');
  }
		
  const blackAndWhite = document.getElementById('blackAndWhite');
  // si existe el elemento blackAndWhite entonces ejecuta el JS que aplica el atributo style al elemento
  if (blackAndWhite !== null) {
	  blackAndWhite.setAttribute('style', 'filter: grayscale(100%)');
  } else {
    console.log('No existe el elemento blackAndWhite');
  }

  const saturation = document.getElementById('saturation');
  // si existe el elemento saturation entonces ejecuta el JS que aplica el atributo style al elemento
  if (saturation !== null) {
    saturation.setAttribute('style', 'filter: saturate(180%)');
  } else {
    console.log('No existe el elemento saturation');
  }
}

module.exports = loadFilter;

