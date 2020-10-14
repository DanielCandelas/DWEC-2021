
var tablero = new Array;


tablero[0] = ["_", "_", "_"];
tablero[1] = ["_", "o", "_"];
tablero[2] = ["_", "_", "_"];

var empate = 0;
var ganar = false;

function pintoTablero(){  //Pintamos el tablero con las imagenes 

    for (i = 0; i < tablero.length; i++) {
        for (j = 0; j < tablero[i].length; j++) {
            var id_casilla = "casilla_" + i + j;

            if(tablero[i][j] == "_"){
                document.getElementById(id_casilla).innerHTML="<img src='img/_.png'>"; //Escribes en el html con el innerHtml
            } 

            if(tablero[i][j] == "o"){
                document.getElementById(id_casilla).innerHTML="<img src='img/o.png'>"; 
            }
                
            if(tablero[i][j] == "x"){
                document.getElementById(id_casilla).innerHTML="<img src='img/x.png'>"; 
            }
        }        
    }
}


function turnoX(casilla){ //Llamamos a la casilla donde hemos hecho click.   

    posicionI = casilla.id.charAt(8); //Averiguamos la i de la casilla cogiendo el caracter en la posicion 8
    posicionJ = casilla.id.charAt(9); //Averiguamos la j de la casilla cogiendo el caracter en la posicion 9 
    
    if(tablero[posicionI][posicionJ] == "_"){ //Si es una casilla libre "_" 
        tablero[posicionI][posicionJ] = "x";  //La convertimos en "x"

        
        
        pintoTablero();     //Llamamos a pintoTablero para que se actualize
        comprobarGanador(); //Comprobamos si hay ganador
        
        /*Es para que no se repita el alert si el jugador es el ganador ya que entraria en 
        comprobarGanador por segunda vez despues de tiradaMaquina.*/
        if (!ganar) { 
            tiradaMaquina();    //Turno de la maquina
            comprobarGanador(); //Comprobamos si hay ganador
        }
        
    }
}


function tiradaMaquina(){
    //Aleatorio para añadir o
    var r1 = Math.floor(Math.random() * 3);
    var r2 = Math.floor(Math.random() * 3);
    
    if (tablero[r1][r2] == "_") {   //Si es una casilla libre "_" 
        tablero[r1][r2] = "o";      //La convertimos en "o"
        empate++;           //Aumentamos el contador de tiradas hasta que se produzca empate (4)
        pintoTablero();     //Llamamos a pintoTablero para que se actualize
    } else {
        tiradaMaquina();    //Si no esta vacia "_", volvemos a ejecutar tiradaMaquina hasta encontrar una vacia "_"
    }
}

function comprobarGanador(){
    //comprobar si hay 3 en raya

    //Empate
    if(empate == 4){
        alert("Los jugadores han empatado");
        location.reload();
    }

    // I = 0
    if ((tablero[0][0] == tablero[0][1]) && (tablero[0][1] == tablero[0][2]) && (tablero[0][0] == tablero[0][2]) && (tablero[0][0] != "_")) {
        if (tablero[0][0] == "o") {
            alert("La maquina es la ganadora");
            ganar = true;
            location.reload();
        } else {
            alert("El jugador es el ganador");
            ganar = true;
            location.reload();
        }        
    }

    // I = 1
    if ((tablero[1][0] == tablero[1][1]) && (tablero[1][1] == tablero[1][2]) && (tablero[1][0] == tablero[1][2]) && (tablero[1][0] != "_")) {
        if (tablero[1][0] == "o") {
            alert("La maquina es la ganadora");
            ganar = true;
            location.reload();
        } else {
            alert("El jugador es el ganador");
            ganar = true;
            location.reload();
        }        
    }

    // I = 2
    if ((tablero[2][0] == tablero[2][1]) && (tablero[2][1] == tablero[2][2]) && (tablero[2][0] == tablero[2][2]) && (tablero[2][0] != "_")) {
        if (tablero[2][0] == "o") {
            alert("La maquina es la ganadora");
            ganar = true;
            location.reload();
        } else {
            alert("El jugador es el ganador");
            ganar = true;
            location.reload();
        }        
    }

    //J = 0
    if ((tablero[0][0] == tablero[1][0]) && (tablero[1][0] == tablero[2][0]) && (tablero[0][0] == tablero[2][0]) && (tablero[0][0] != "_")) {
        if (tablero[0][0] == "o") {
            alert("La maquina es la ganadora");
            ganar = true;
            location.reload();
        } else {
            alert("El jugador es el ganador");
            ganar = true;
            location.reload();
        }        
    }

    //J = 1
    if ((tablero[0][1] == tablero[1][1]) && (tablero[1][1] == tablero[2][1]) && (tablero[0][1] == tablero[2][1]) && (tablero[0][1] != "_")) {
        if (tablero[0][1] == "o") {
            alert("La maquina es la ganadora");
            ganar = true;
            location.reload();
        } else {
            alert("El jugador es el ganador");
            ganar = true;
            location.reload();
        }        
    }

    //J = 2
    if ((tablero[0][2] == tablero[1][2]) && (tablero[1][2] == tablero[2][2]) && (tablero[0][2] == tablero[2][2]) && (tablero[0][2] != "_")) {
        if (tablero[0][2] == "o") {
            alert("La maquina es la ganadora");
            ganar = true;
            location.reload();
        } else {
            alert("El jugador es el ganador");
            ganar = true;
            location.reload();
        }        
    }

    //Diagona principal (I = J)
    if ((tablero[0][0] == tablero[1][1]) && (tablero[0][0] == tablero[2][2]) && (tablero[1][1] == tablero[2][2]) && (tablero[0][0] != "_")) {
        if (tablero[0][0] == "o") {
            alert("La maquina es la ganadora");
            ganar = true;
            location.reload();
        } else {
            alert("El jugador es el ganador");
            ganar = true;
            location.reload();
        }        
    }

    //Diagonal inversa
    if ((tablero[0][2] == tablero[1][1]) && (tablero[0][2] == tablero[2][0]) && (tablero[1][1] == tablero[2][0]) && (tablero[1][1] != "_")) {
        if (tablero[1][1] == "o") {
            alert("La maquina es la ganadora");
            ganar = true;
            location.reload();
        } else {
            alert("El jugador es el ganador");
            ganar = true;
            location.reload();
        }        
    }
}


