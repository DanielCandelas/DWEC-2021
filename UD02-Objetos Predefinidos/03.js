

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
var num;
var cont = 0;

letra = prompt("Introduzca una letra de la A a la Z, que no sea Ñ, O, I o U")
letra = letra.toUpperCase();

console.log(letra);

for (i = 0; i < letras.length; i++) {
    if (letra == letras[i]) {
        num = i;
        console.log(num);
    }
}

for (i = 10000000; i < 99999999; i++) {
    if (i % 23 == num) {
        cont++;
        if (cont <= 200) {
            console.log(cont + " " + i);
        }
    }
}

