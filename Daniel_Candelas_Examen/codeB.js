$(document).ready(function(){

    listar_cartas();  

    $(document).on('click', ".borrar", function(){
        var fila_borrar = $(this).parent();
        fila_borrar.remove();
    });

    $(document).on('mouseover', ".carta", function(){  //no funciona bien
        var fecha_fila = $(this).children();
        console.log(fecha_fila);
        $("#fecha").append("<p>Fecha</p>");      
    });    
    
    $(document).on('click', "#abrir_modal", function(){
        $("#modal_nueva_carta").show();
    });

    $(document).on('click', "#cerrar_modal", function(){
        $("#modal_nueva_carta").hide();
    });

    $("#enviar_carta").click(function(){
        console.log("Envia Entra");
        enviar_carta();        
    });
    

});


function listar_cartas(){
    $.ajax({
        url : 'php/listo_cartas.php', 
        data : {},
        type : 'POST',    
        dataType : 'json', 

        success : function(respuesta) {
            for(var key in respuesta){ 
                var asterisco1 = respuesta[key].estrellas1;
                var aux1 = "";
                for(var i = 1; i <= asterisco1; i++){
                    aux1 += "*"; 
                }

                var asterisco2 = respuesta[key].estrellas2;
                var aux2 = "";
                for(var i = 1; i <= asterisco2; i++){
                    aux2 += "*"; 
                }
                
                var asterisco3 = respuesta[key].estrellas3;
                var aux3 = "";
                for(var i = 1; i <= asterisco3; i++){
                    aux3 += "*"; 
                }
                
                $("#cartas").append("<div class='carta'> <input class='fecha_carta' type='hidden' value='"+respuesta[key].fecha+"'>"
                +respuesta[key].regalo1+" - "+aux1+" - "+respuesta[key].regalo2+" - "+aux2+" - "+respuesta[key].regalo3+" - "+aux3+ 
                " - <Button class='borrar'>Borrar</Button> </div>");                
            }
        },        

        error : function(xhr, status) {
            alert('Disculpe, existio un problema');
        },
    });
}

function enviar_carta() {
    var objeto_dato = {   
        fecha: "18-12-2020",
        r1: $("#regalo1").text(),
        r2: $("#regalo2").text(),
        r3: $("#regalo3").text(),
        p1: $(".preferencia1").val(),
        p2: $(".preferencia2").val(),
        p3: $(".preferencia3").val()
    };

    console.log(objeto_dato);

    $.ajax({
        url: "php/envio_carta.php", // Paso datos 
        type: "POST",
        data: objeto_dato,
        dataType: "json",
    
        success : function(respuesta){
            console.log(respuesta);  // recojo la respuesta, que sera true o false
            if (respuesta) {
                $("#cartas").append("<div class='carta'> <input class='fecha_carta' type='hidden' value='"+objeto_dato.fecha+"'>"
                +objeto_dato.r1+" - "+objeto_dato.p1+" - "+objeto_dato.r2+" - "+objeto_dato.p2+" - "+objeto_dato.r3+" - "+objeto_dato.p3+ 
                " - <Button class='borrar'>Borrar</Button> </div>"); 
                alert("Carta enviada " + objeto_dato.fecha + " correcta");              
            } else {
                alert("Error en la insercion"); 
            }        
        },        

        error : function(xhr, status) {
            alert('Disculpe, existio un problema');
        },

    });
}

jQuery(function() {
    jQuery( "#carta" ).validate({
            rules: {
                regalo1: {
                    required: true,
                    maxlength: 15
                },

                regalo2: {
                    required: true,
                    maxlength: 15
                },

                regalo3: {
                    required: true,
                    maxlength: 15
                },

                preferencia1: {
                    required: true
                },

                preferencia2: {
                    required: true
                },

                preferencia3: {
                    required: true
                }
            },
            messages: {
                regalo1: {
                    required: "Introduce el nombre del regalo",
                    maxlength: jQuery.validator.format("Porfavor no introduzca mas de {0} caracteres.")
                },

                regalo2: {
                    required: "Introduce el nombre del regalo",
                    maxlength: jQuery.validator.format("Porfavor no introduzca mas de {0} caracteres.")
                },

                regalo3: {
                    required: "Introduce el nombre del regalo",
                    maxlength: jQuery.validator.format("Porfavor no introduzca mas de {0} caracteres.")
                },

                preferencia1: {
                    required: "Seleccione una casilla porfavor"
                }, 

                preferencia2: {
                    required: "Seleccione una casilla porfavor"
                },

                preferencia3: {
                    required: "Seleccione una casilla porfavor"
                }
            }
    });
});