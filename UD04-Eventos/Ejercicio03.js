
document.onkeydown=calcularDni;


function calcularDni(evento){

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    var num;    

    letra = evento.key;
    letra = letra.toUpperCase();


    for (i = 0; i < letras.length; i++) {
        if (letra == letras[i]) {
            num = i;
        }
    }

    for (i = 0001; i < 9999; i++) {
        if (i % 23 == num) {
            document.getElementById("mostrar").innerHTML+=", " + i;
        }        
    }

   
}
