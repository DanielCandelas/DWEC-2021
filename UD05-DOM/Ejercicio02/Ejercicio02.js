/* Realiza un programa que cree dinámicamente una tabla de 100x100. 
Cada elemento de la tabla tendrá un número único, que empezará en 1 y se irá incrementando de 1 en 1 */


function crear_tabla(){

    var tabla = document.createElement("table");
    var numero = 1;

    for (i = 0; i < 20; i++) {
        var fila = document.createElement("tr");
        for (j = 0; j < 20; j++) {
            var celda = document.createElement("td");
            var texto = document.createTextNode(numero);
            celda.appendChild(texto);
            fila.appendChild(celda);

            if (esCasiPrimo(numero)) {
                celda.style.backgroundColor="red";
            }
            numero++;
        }
        tabla.appendChild(fila); 
    }
    document.body.appendChild(tabla);
}

function esCasiPrimo(n){
    
    var oportunidad = 0;

    for(x = 2; x < n; x++){
        if(n%x == 0){
            oportunidad++;
        }
    }
    
    if(oportunidad == 1)
        return true;
    else
        return false;
}