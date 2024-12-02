const aumentarZoom = document.getElementById('aumentarZoom');
const abaixarZoom  = document.getElementById('abaixarZoom');
const aumentarZoomDM = document.getElementById('aumentarZoomDM');
const abaixarZoomDM = document.getElementById('abaixarZoomDM');
const body = document.getElementById('container-direito')

aumentarZoom.addEventListener('click', () => {
  body.style.zoom = '125%'; // Zoom in by 125%
});
  
abaixarZoom.addEventListener('click', () => {
  body.style.zoom = '100%'; // Zoom back to 100% (normal size)
});

aumentarZoomDM.addEventListener('click', () => {
  body.style.zoom = '125%'; // Zoom in by 125%
});

abaixarZoomDM.addEventListener('click', () => {
  body.style.zoom = '100%'; // Zoom back to 100% (normal size)
});