
var tablero = new Array;

tablero[0] = ["_", "_", "_"];
tablero[1] = ["_", "O", "_"];
tablero[2] = ["_", "_", "_"];

console.log(tablero);


function pintoTablero(){

    for (i = 0; i <= 2; i++) {
        for (j = 0; j <= 2; j++) {
            var id_casilla = "casilla_" + i + j;
            document.getElementById(id_casilla).value=tablero[i][j];        
        }        
    }
}

function jugada(){
    //leer todos los valor de los inputs y meterlos en tablero
    var valor;

    for (i = 0; i <= 2; i++) {
        for (j = 0; j <= 2; j++) {
            var id_casilla = "casilla_" + i + j;
            valor = document.getElementById(id_casilla).value;    
            tablero[i][j] = valor;
            console.log(tablero[i][j]);        
        }        
    }
    
}

function tiradaMaquina(){
    //Aleatorio para añadir 0
}


function comprobarGanador(){
    //comprobar si hay 3 en raya

}