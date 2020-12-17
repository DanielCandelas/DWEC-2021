


function validar(){
    var campo = document.getElementById("nombre");
    if(campo == null || campo.length == 0 || /^\s+$/.test(campo)){
        alert("El nombre esta vacio");
        return false;
    }

    var edad = document.getElementById("edad");
    if(edad == null || edad.minLength < 0  || edad.maxLength > 100 || isNaN(edad)){
        alert("La edad esta vacia, es manor de 0 o mayor de 100, o no es un numero");
        return false;
    }

    var email = document.getElementById("correo").value;
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
        alert("El correo no esta escrito correctamente");
        return false;
    }
}