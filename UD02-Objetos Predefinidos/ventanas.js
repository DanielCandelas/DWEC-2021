

function crearVentana(x, y){

    var opciones = "width=400, eight=400, toolbar=no, scrollbar=no, left="+x+", top="+y;
    var ventana =  window.open("http://iesconselleria.edu.gva.es/", "" ,opciones);
    return ventana;
}


for (i = 0; i < 2; i++) {
    var alea1 = Math.floor(Math.random()*600);
    var alea2 = Math.floor(Math.random()*400);

    crearVentana(alea1, alea2);
}

var ventCerrar = crearVentana(0, 0);

setTimeout("cerrarVentana();", 2000);

function cerrarVentana(){
   ventCerrar.close();
}
