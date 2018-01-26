function cargaFiltro() {
  var sepia = document.getElementById('sepia');
  // si existe el elemento sepia entonces ejecuta el JS que aplica el atributo style al elemento
  if (sepia !== null) {
	  sepia.setAttribute('style', 'filter: sepia(75%)');
  }
		
  var blackAndWhite = document.getElementById('blackAndWhite');
  if (blackAndWhite !== null) {
	  blackAndWhite.setAttribute('style', 'filter: grayscale(100%)');
  }

  var saturation = document.getElementById('saturation');
  if (saturation !== null) {
    saturation.setAttribute('style', 'filter: saturate(180%)');
  }
}

