const originalImage = document.getElementById('originalImage');
const blackAndWhiteEffect = document.getElementById('btnblackAndWhite');
const sepiaEffect = document.getElementById('btnSepia');
const saturationEffect = document.getElementById('btnSaturation');


blackAndWhiteEffect.addEventListener('click', () => {
  originalImage.setAttribute('style', 'filter: grayscale(80%)');
});

sepiaEffect.addEventListener('click', () => {
  originalImage.setAttribute('style', 'filter: sepia(60%)');
});

saturationEffect.addEventListener('click', () => {
  originalImage.setAttribute('style', 'filter: saturate(180%)');
});