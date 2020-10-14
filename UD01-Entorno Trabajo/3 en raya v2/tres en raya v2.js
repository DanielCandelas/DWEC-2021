
var tablero = new Array;

tablero[0] = ["_", "_", "_"];
tablero[1] = ["_", "O", "_"];
tablero[2] = ["_", "_", "_"];


function pintoTablero(){

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






