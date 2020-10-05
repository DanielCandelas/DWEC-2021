
function inicio(){
    document.getElementById("comenzar").onclick=mostrarSaludos;

    document.getElementById("parar").onclick=pararSaludos;
}

var myInterval = 0;

function mostrarSaludos(){
    if(myInterval == 0){
        myInterval = setInterval("alert('Hola')", 5000);
    } else {
        alert("Ya hay un saludo en marcha");
    }
    
}

function pararSaludos(){
    if(myInterval == 0){
        alert("No hay un saludo en marcha");
    } else {
        clearInterval(myInterval);
        myInterval = 0; 
    }
    
}