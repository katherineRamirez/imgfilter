'use strict';

//const cargaFiltro = require("src/cargaFiltro");


function cargaFiltro() {
  const sepia = document.getElementById('sepia');
  // si existe el elemento sepia entonces ejecuta el JS que aplica el atributo style al elemento
  if (sepia !== null) {
	  sepia.setAttribute('style', 'filter: sepia(75%)');
  }
		
    
  const blackAndWhite = document.getElementById('blackAndWhite');
  // si existe el elemento blackAndWhite entonces ejecuta el JS que aplica el atributo style al elemento
  if (blackAndWhite !== null) {
	  blackAndWhite.setAttribute('style', 'filter: grayscale(100%)');
  }

  const saturation = document.getElementById('saturation');
  // si existe el elemento saturation entonces ejecuta el JS que aplica el atributo style al elemento
  if (saturation !== null) {
    saturation.setAttribute('style', 'filter: saturate(180%)');
  }
}

module.exports = cargaFiltro;


