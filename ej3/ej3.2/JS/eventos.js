$(document).ready(function(){
    var boton = $("#boton");
    boton.on("click", function(){
        document.body.style.background = "#000"; // JavaScript puro
    });
});

$(document).ready(function(){
    var boton = $("#boton");
    boton.on("mouseenter", function(){
        document.body.style.background = "#000"; // JavaScript puro
    });
    boton.on("mouseleave", function(){
        document.body.style.background = "#fff"; // JavaScript puro
    });
});

$(document).ready(function(){
    var boton = $("#boton");
    boton.on("click", function(){
        alert("Saludos");
    });

    $("#desactivar").on("click", function(){
        boton.off("click");
        alert("Ha quedado desactivado el botón 'Ejecutar'");
    });
});

$(document).ready(function(){
    $("a").on("click", function(e){
        e.preventDefault();
        alert("Link desactivado");
    });
});
