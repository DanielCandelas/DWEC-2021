
var tablero = new Array;

tablero[0] = ["_", "_", "_"];
tablero[1] = ["_", "O", "_"];
tablero[2] = ["_", "_", "_"];


console.log(tablero);


function pintoTablero(){

    for (i = 0; i < tablero.length; i++) {
        for (j = 0; j < tablero[i].length; j++) {
            var id_casilla = "casilla_" + i + j;
            document.getElementById(id_casilla).value=tablero[i][j];        
        }        
    }
}

function jugada(){
    //leer todos los valor de los inputs y meterlos en tablero

    for (i = 0; i < tablero.length; i++) {
        for (j = 0; j < tablero[i].length; j++) {
            var id_casilla = "casilla_" + i + j;
            tablero[i][j] = document.getElementById(id_casilla);        
        }        
    }
}

function tiradaMaquina(){
    //Aleatorio para añadir 0
    for (i = 0; i < tablero.length; i++) {
        for (j = 0; j < tablero[i].length; j++) {
            
        }        
    }


}


function comprobarGanador(){
    //comprobar si hay 3 en raya

}