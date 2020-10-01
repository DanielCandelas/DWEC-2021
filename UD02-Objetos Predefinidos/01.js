
var interv = setInterval(repeticion, 20000);
var cadena;
var arrayLetras = new Array();


function repeticion() {
    var dni = "0";
    dni = prompt("Introduzca un DNI");


    if (dni != "-1") {
        cadena = dni;
        cadena = cadena.charAt(8);
        arrayLetras.push(cadena);
    } else {
        console.log(arrayLetras);
        clearInterval(interv);
    }
}
