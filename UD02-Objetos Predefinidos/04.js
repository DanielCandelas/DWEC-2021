




function calcular(){

    var num = document.getElementById("numero").value;
    console.log(num);
    var cont = 0;
    var arrayNum = new Array();

    for (i = 2; i <= num; i++) {
        if (esPrimo(i) && esPalindromo(i.toString())) {
            cont++;
            arrayNum.push(i);
        }
    }

    confirm("Hay " + cont + " numeros que son primos y palindromos a la vez del 0 hasta el " + num + ". Desea verlos?");
    if (confirm) {
        /*
        for (var i = 0; i < arrayNum.length; i++) {
            console.log(arrayNum[i]);    
        }
        */
        console.log(arrayNum);
    }
}




function esPalindromo(numero) {
    var palindromo = true;

    var splitNumero = numero.split("");

    var splitNumeroInvertido = numero.split("");
    splitNumeroInvertido.reverse();

    for (var i = 0; i < numero.length; i++) {
        if (splitNumeroInvertido[i] != splitNumero[i]) {
            palindromo = false;
        }
    }

    return palindromo;

}


function esPrimo(numero) {
    var primo = true;
    x = 2;
    do {
        if (numero % x == 0) {
            primo = false;
        }
        x++;
    } while (x < numero);

    return primo;
}
