
/* Haz un programa que cuando se pulse un botón “Nuevo número”, 
añada un elemento con un número aleatorio a una lista desordenada (elemento UL) */


function insertar(){

    var nuevoElemento = document.createElement("li");

    var nodoTexto = document.createTextNode(Math.random());

    nuevoElemento.appendChild(nodoTexto);

    document.getElementById("lista").appendChild(nuevoElemento); 

}
