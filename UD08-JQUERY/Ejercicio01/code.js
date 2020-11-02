$(document).ready(function() {
    console.log("jquery okey");

    $("#esconder").click(function(){
        console.log("esconder");
        $("article").hide();
    });

    $("#ensenar").click(function(){
        console.log("ensenar");
        $("article").show();
    });

    $("#anado").click(function(){
        console.log("anado");
        $("section").append("<article>Esto es un article dentro de section<br></article>");
    });

    $("#quito").click(function(){
        console.log("quito");
        $("article:last-child").remove();
    });

});