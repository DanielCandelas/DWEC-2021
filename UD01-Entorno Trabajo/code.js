
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

function leoTablero(){
    //leer todos los valor de los inputs y meterlos en tablero

    for (i = 0; i < tablero.length; i++) {
        for (j = 0; j < tablero[i].length; j++) {
            var id_casilla = "casilla_" + i + j;
            tablero[i][j] = document.getElementById(id_casilla).value; 
                
            if ((tablero[i][j] != "O") && (tablero[i][j] != "_")) {
                tablero[i][j] = "X"
            }
        }        
    }
    
    console.log(tablero);

    comprobarGanador();
    tiradaMaquina();
    comprobarGanador();
    
}

function tiradaMaquina(){
    //Aleatorio para añadir 0
    var r1 = Math.floor(Math.random() * 3);
    var r2 = Math.floor(Math.random() * 3);
    
    if (tablero[r1][r2] == "_") {
        tablero[r1][r2] = "O";  
        pintoTablero();     
    } else {
        tiradaMaquina();
    }


}


function comprobarGanador(){
    //comprobar si hay 3 en raya

    // I = 0
    if ((tablero[0][0] == tablero[0][1]) && (tablero[0][1] == tablero[0][2]) && (tablero[0][0] == tablero[0][2]) && (tablero[0][0] != "_")) {
        if (tablero[0][0] == "O") {
            alert("La maquina es la ganadora");
            location.reload();
        } else {
            alert("El jugador es el ganador");
            location.reload();
        }        
    }

    // I = 1
    if ((tablero[1][0] == tablero[1][1]) && (tablero[1][1] == tablero[1][2]) && (tablero[1][0] == tablero[1][2]) && (tablero[1][0] != "_")) {
        if (tablero[1][0] == "O") {
            alert("La maquina es la ganadora");
            location.reload();
        } else {
            alert("El jugador es el ganador");
            location.reload();
        }        
    }

    // I = 2
    if ((tablero[2][0] == tablero[2][1]) && (tablero[2][1] == tablero[2][2]) && (tablero[2][0] == tablero[2][2]) && (tablero[2][0] != "_")) {
        if (tablero[2][0] == "O") {
            alert("La maquina es la ganadora");
            location.reload();
        } else {
            alert("El jugador es el ganador");
            location.reload();
        }        
    }

    //J = 0
    if ((tablero[0][0] == tablero[1][0]) && (tablero[1][0] == tablero[2][0]) && (tablero[0][0] == tablero[2][0]) && (tablero[0][0] != "_")) {
        if (tablero[0][0] == "O") {
            alert("La maquina es la ganadora");
            location.reload();
        } else {
            alert("El jugador es el ganador");
            location.reload();
        }        
    }

    //J = 1
    if ((tablero[0][1] == tablero[1][1]) && (tablero[1][1] == tablero[2][1]) && (tablero[0][1] == tablero[2][1]) && (tablero[0][1] != "_")) {
        if (tablero[0][1] == "O") {
            alert("La maquina es la ganadora");
            location.reload();
        } else {
            alert("El jugador es el ganador");
            location.reload();
        }        
    }

    //J = 2
    if ((tablero[0][2] == tablero[1][2]) && (tablero[1][2] == tablero[2][2]) && (tablero[0][2] == tablero[2][2]) && (tablero[0][2] != "_")) {
        if (tablero[0][2] == "O") {
            alert("La maquina es la ganadora");
            location.reload();
        } else {
            alert("El jugador es el ganador");
            location.reload();
        }        
    }

    //I = J
    if ((tablero[0][0] == tablero[1][1]) && (tablero[0][0] == tablero[2][2]) && (tablero[1][1] == tablero[2][2]) && (tablero[0][0] != "_")) {
        if (tablero[0][0] == "O") {
            alert("La maquina es la ganadora");
            location.reload();
        } else {
            alert("El jugador es el ganador");
            location.reload();
        }        
    }

    //Diagonal inversa
    if ((tablero[0][2] == tablero[1][1]) && (tablero[0][2] == tablero[2][0]) && (tablero[1][1] == tablero[2][0]) && (tablero[1][1] != "_")) {
        if (tablero[1][1] == "O") {
            alert("La maquina es la ganadora");
            location.reload();
        } else {
            alert("El jugador es el ganador");
            location.reload();
        }        
    }

}

    

