

function enviar_peticion(accion){

    var conexion = new XMLHttpRequest();

    conexion.onreadystatechange = function(){
        if (conexion.readyState == 4 && conexion.status == 200) {

           document.getElementById("respuesta").innerText = conexion.responseText;


        }
    };  

    conexion.open("POST", "UD09-2AJAX.php", true);
    conexion.setRequestHeader("Content-Type", "application/x-www-from-urlencoded");
    conexion.send('accion=' + accion);
}

