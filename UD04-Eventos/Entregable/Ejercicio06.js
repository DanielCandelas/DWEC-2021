
var time = 0;
var myInterval = setInterval(crono, 1);

var primer = false;     //Boolean para que entre solo la primera vez en primerCirculo()

var laps = 0;           //Rondas, cada 5 se baja el tiempo limite en 50 mls
var rondas = 0;         //Contador para saber cuantas rondas has hecho al final
var cont = 300;         //Tiempo permitido para clicar, cada 5 laps se baja 50 mls 
var noRepetir = 0;
var num_circulo = 0;

function pintoCirculoRojo(){

    time = 0;       //Reset del tiempo

    if (primer) {  //Aqui entra a partir de la 2 ronda 
        laps++;
        rondas++;

        if (laps == 5) {
            cont -= 50;
            laps = 0; //Reset de las laps
        }
        
        document.getElementById(id_circulo).removeAttribute("class");

        do{
            num_circulo = Math.floor(Math.random() * 9); //Conseguimos un numero random entre 0 y 8, ese sera el circulo que pintemos
            console.log(num_circulo);
        } while(noRepetir == num_circulo);
            
        noRepetir = num_circulo;      

        id_circulo = "circulo_" + num_circulo; //Conseguimos la id del circulo
        console.log(id_circulo);

    
        document.getElementById(id_circulo).className="objetivo"; //Pintamos el circulo 
        
        document.getElementById(id_circulo).onclick = pintoCirculoRojo; //Si le damos a tiempo vuelve a pintar otro circulo y se resetea el tiempo

    } else {
        primerCirculo(); //Aqui entra sola en la primera ronda para que no de problemas el removeAttribute
    }   
}


function primerCirculo(){ //Este programa pinta el primer circulo

    num_circulo = Math.floor(Math.random() * 9); //Conseguimos un numero random entre 0 y 8, ese sera el circulo que pintemos
    console.log(num_circulo);

    id_circulo = "circulo_" + num_circulo; //Conseguimos la id del circulo
    console.log(id_circulo);

    document.getElementById(id_circulo).className="objetivo"; //Pintamos el circulo 

    primer = true;

    noRepetir = num_circulo;

    document.getElementById(id_circulo).onclick = pintoCirculoRojo;
}


function crono(){
    time++;
    document.getElementById("cronometro").innerHTML = time;

    if(time > cont){
        alert("Has perdido, has durado " + rondas + " rondas.");
        time = 0;
        cont = 300;
        rondas = 0;
    }
}



