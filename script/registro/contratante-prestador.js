const contratante = document.getElementById('contratante');
const prestador = document.getElementById('prestador');
const extraColumn = document.getElementById('coluna5');

contratante.addEventListener('change', function() {
    if (this.checked) {
        extraColumn.style.display = 'none';
    }
});

prestador.addEventListener('change', function() {
    if (this.checked) {
        extraColumn.style.display = 'block';
    }
});