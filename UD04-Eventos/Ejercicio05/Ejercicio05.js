
var ms = 0;
var myIntrval; 

function init(){

    document.getElementById("salida").onmouseover = empezarJuego;
    
}

function empezarJuego(){    

    myIntrval = setInterval(intervalo, 100); 

    document.getElementById("pared_0").onmouseover = muestraMensaje;
    document.getElementById("pared_1").onmouseover = muestraMensaje;
    document.getElementById("pared_2").onmouseover = muestraMensaje;    
    document.getElementById("final").onmouseover = acabarJuego;
}

function muestraMensaje() {
    alert('No te salgas del camino color salmon');
    location.reload();
}

function acabarJuego() {
    clearInterval(myIntrval);
    var totalTime = ms/10;
    alert("Has ganado, has tardado " + totalTime + " segundos");
    location.reload();
}

function intervalo(){
    ms++;
}








