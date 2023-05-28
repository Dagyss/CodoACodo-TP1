const general = 200;
const multEstudiante = 0.2;
const multTrainee = 0.5;
const multJr = 0.85;


function calcularTotal() {
    var cantEntradas, total, categoria;
    cantEntradas = document.getElementById('inputCantidad').value;
    categoria = document.getElementById('inputCategoria').value;
    if (cantEntradas > 0 && !isNaN(cantEntradas) && cantEntradas % 1 == 0) {
        total=general*cantEntradas
        switch(categoria){
            case 'Estudiante':
                total=total*multEstudiante;
                break;
            case 'Trainee':
                total=total*multTrainee;
                break;
            case 'Junior':
                total=total*multJr;
                break;
        }
        document.getElementById('importeTotal').innerHTML =
          'Total a Pagar: \u0024' + total;
    } else {
      window.alert('Debe ingresar la cantidad de entradas en números enteros');
    }
}

function borrar() {
    document.getElementById('inputNombre').value = '';
    document.getElementById('inputApellido').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputCantidad').value = ' ';
    document.getElementById('inputCategoria').value = 'Estudiante';
    document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024';
}
