

function ajax(){

    var conexion = new XMLHttpRequest();

    conexion.onreadystatechange = function(){
        if (conexion.readyState == 4 && conexion.status == 200) {

            var objeto_respuesta = JSON.parse(conexion.responseText);
            console.log(objeto_respuesta);

            //DOM            
            var miSelect = document.createElement("select");

            for(var i in objeto_respuesta.provincias){
                console.log(objeto_respuesta.provincias[i].nom);
                var option_provincia = document.createElement("option");
                option_provincia.setAttribute("value", objeto_respuesta.provincias[i].cp);
                option_provincia.innerText=objeto_respuesta.provincias[i].nom;

                miSelect.appendChild(option_provincia);
            }

            miSelect.addEventListener("change", function(){
                //console.log(miSelect.options);
                //document.getElementById("cp").innerText = miSelect.options[this.selectedIndex].value;
                document.getElementById("cp").innerText = this.value;
            });
            
            document.getElementById("contenido").appendChild(miSelect);

        }
    }    

    conexion.open('GET', 'provincias.json', true);
    conexion.send();
}

