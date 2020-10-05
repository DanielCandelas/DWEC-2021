



function cambiarColor(){
    document.body.bgColor="rgb("+ numAleatorios(0, 255) + "," + numAleatorios(0, 255) + "," + numAleatorios(0, 255) + ")";
}

function numAleatorios(min, max){
    return Math.floor(Math.random()* (max - min) + min)
}


document.ondblclick=cambiarColor;