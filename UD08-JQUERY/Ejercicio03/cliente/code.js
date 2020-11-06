$(document).ready(function(){

    cargar_provincias();

    cargo_municipios();    

    $("#municipio").change(function(){
        var nom_provincia = $("#provincias option:selected").text();
        var nom_municipio = $("#municipio option:selected").text();
        $("#seleccion").html("Provincia: " + nom_provincia + "<br> Municipio: " + nom_municipio);
    });
   
});

function cargar_provincias(){
    $.ajax({
        url : '../servidor/cargaProvinciasJSON.php', 
        data : {},
        type : 'POST',    
        dataType : 'json', 

        success : function(respuesta) {
            for(var key in respuesta){                
                $("#provincias").append("<option value='"+key+"'>"+respuesta[key]+"</option>");
            }
        },        

        error : function(xhr, status) {
            alert('Disculpe, existio un problema');
        },
    });
}

function cargo_municipios(){
    $("#provincias").change(function(){
        var cod_provincia = $("#provincias option:selected").val();
        var dato_enviar = {"provincia" : cod_provincia};

        $.ajax({
            url : '../servidor/cargaMunicipiosJSON.php', 
            data : dato_enviar,
            type : 'POST',    
            dataType : 'json', 
    
            success : function(respuesta) {
                for(var key in respuesta){                
                    $("#municipio").append("<option value='"+key+"'>"+respuesta[key]+"</option>");
                }
            },        
    
            error : function(xhr, status) {
                alert('Disculpe, existio un problema');
            },
        });

    });
}