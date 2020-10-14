

function init(){

    document.getElementById("salida").onclick = empezarJuego;
    
    function empezarJuego(){
        document.getElementById("tablero").onmouseout = muestraMensaje;
        document.getElementById("pared_0").onmouseover = muestraMensaje;
        document.getElementById("pared_1").onmouseover = muestraMensaje;
        document.getElementById("pared_2").onmouseover = muestraMensaje;
    }    
}

function muestraMensaje() {
    alert('No te salgas del camino color salmon');
}








