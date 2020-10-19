
/* Haz un programa que cree 100 elementos “checkbox” con números aleatorios.
Además la página tendrá un botón “Marcar todos” y un botón “Desmarcar todos”. */

function crearCheck(){
   
    for(i = 0; i < 100; i ++){

        var chek = document.createElement("input"); 
        var salto = document.createElement("br");
        
        chek.type = "checkbox";
        chek.value = 10;
        chek.name = "mycheck";

        var etiqueta = document.createElement("label");
        var texto = document.createTextNode(Math.random(10));
        etiqueta.appendChild(texto);

        document.body.appendChild(salto);
        document.body.appendChild(chek);
        document.body.appendChild(etiqueta); 
    }
}

function todo(){
    var checks = document.getElementsByName("mycheck");
    for(i = 0; i < checks.length; i ++){
        checks[i].checked = true;
    }
}

function nada(){
    var checks = document.getElementsByTagName("input");
    for(i = 0; i < checks.length; i ++){
        checks[i].checked = false;
    }
}