

var interv = setInterval(repeticion, 5000);
var arrayLetras = new Array();

function repeticion() {
    var dni = "0";
    dni = prompt("Introduzca un DNI");

    if (dni != "-1") {
        arrayLetras.push(letraDni(dni));
        console.log(dni);
    } else {
        console.log(arrayLetras);
        var mostrar = arrayLetras.join(",");
        alert(mostrar);
        clearInterval(interv);
    }
}

function letraDni(numDni) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    return letras[numDni % 23];
}

