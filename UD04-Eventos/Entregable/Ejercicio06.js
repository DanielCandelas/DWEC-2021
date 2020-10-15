
var time = 0;
var myInterval = setInterval(crono, 1);
var primer = false;
var laps = 0;
var cont = 300;

function pintoCirculoRojo(){
    time = 0;

    if (primer) {
        laps++;
        if (laps == 5) {
            cont -= 50;
            laps = 0;
        }
        
        document.getElementById(id_circulo).removeAttribute("class");

        var num_circulo = Math.floor(Math.random() * 9); //Conseguimos un numero random entre 0 y 8, ese sera el circulo que pintemos
        console.log(num_circulo);
    
        id_circulo = "circulo_" + num_circulo; //Conseguimos la id del circulo
        console.log(id_circulo);
    
        document.getElementById(id_circulo).className="objetivo"; //Pintamos el circulo 
        
        document.getElementById(id_circulo).onclick = pintoCirculoRojo;
    } else {
        primerCirculo();
    }   
}


function primerCirculo(){
    var num_circulo = Math.floor(Math.random() * 9); //Conseguimos un numero random entre 0 y 8, ese sera el circulo que pintemos
    console.log(num_circulo);

    id_circulo = "circulo_" + num_circulo; //Conseguimos la id del circulo
    console.log(id_circulo);

    document.getElementById(id_circulo).className="objetivo"; //Pintamos el circulo 

    primer = true;

    document.getElementById(id_circulo).onclick = pintoCirculoRojo;
}


function crono(){
    time++;
    document.getElementById("cronometro").innerHTML = time;

    if(time > cont){
        alert("Has perdido");
        time = 0;
        cont = 300;
    }
}



