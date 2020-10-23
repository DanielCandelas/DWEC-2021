

function filaNueva(){

        var tabla_body = document.getElementById('cuerpo');
        console.log(tabla_body);

        var nombre = document.getElementById('producto').value;
        console.log(nombre);

        var cantidad = document.getElementById('cantidad').value;
        console.log(cantidad);

        var precioUnitario = document.getElementById('precioUnitario').value;
        console.log(precioUnitario);



        var fila = document.createElement("tr");

        var col1 = document.createElement("td");
        var col2 = document.createElement("td");
        var col3 = document.createElement("td");
        var col4 = document.createElement("td");
        var col5 = document.createElement("td");        

        col1.innerHTML = nombre;
        col2.innerHTML = cantidad;
        col3.innerHTML = precioUnitario;       
        col4.innerHTML = (cantidad * precioUnitario);
        col4.setAttribute("class", "precio_total")
       
        //col5.innerHTML = (borrar());

        fila.appendChild(col1);
        fila.appendChild(col2);
        fila.appendChild(col3);
        fila.appendChild(col4);
        //fila.appendChild(col5);

        tabla_body.appendChild(fila);
        calcularTotal();
        

        function calcularTotal(){

            var preciosTotales = document.getElementsByClassName("precio_total");

            console.log(preciosTotales[0].innerHTML);
            var base = 0;
            for(i = 0; i < preciosTotales.length; i++){
                base += parseFloat(preciosTotales[i].innerHTML);
            }

            document.getElementById("base").innerHTML;
        }

        /*
        function borrar(){
             
            var enlace = createElement("a");

            return enlace;
        }
        */
}