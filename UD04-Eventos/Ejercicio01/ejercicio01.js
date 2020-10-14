
document.onmousemove=conseguirPosicion;

function conseguirPosicion(evento){
    document.getElementById("posicionRaton").innerHTML="Posicion X: " + evento.clientX + " Posicion Y: " + evento.clientY;
}