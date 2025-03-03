/*
$(document).ready(function(){ 
    var boton = $('#boton'); 
    boton.on('click', function(){ 
        document.body.style.background = '#000'; 
    });
});

$(document).ready(function(){ 
    var boton = $('#boton'); 
    boton.on('mouseenter', function(){ 
        document.body.style.background = '#000';
    });  
    boton.on('mouseleave', function(){ 
        document.body.style.background = '#fff';
    });
});

$(document).ready(function(){ 
    var boton = $('#boton'); 
    boton.on('click', function(){ 
        alert('Saludos'); 
    });
    $('#desactivar').on('click', function(){ 
        boton.off('click'); 
        alert('Ha quedado desactivado el botón "Ejecutar"'); 
    });
});

$(document).ready(function(){ 
    $('a').on('click', function(e){ 
        e.preventDefault(); 
        alert('link desactivado'); 
    });
});

$(document).ready(function(){ 
    $('#boton').on('click', function(){ 
        $('#caja').animate({ width: '300px' });
    });
});

$(document).ready(function(){ 
    $('#boton').on('click', function(){ 
        $('#caja').animate({ width: '300px', opacity: '0.2' });
    });
});

$(document).ready(function(){ 
    $('#boton').on('click', function(){ 
        $('#caja').animate({ width: '300px', opacity: '0.2' }, 3000);
    });
});

$(document).ready(function(){ 
    $('#boton').on('click', function(){ 
        $('#caja').animate({ width: '300px', opacity: '0.2' }, 3000, function(){ 
            alert('Fin de la animación'); 
        });
    });
});

$(document).ready(function(){ 
    $('#boton').on('click', function(){ 
        $('#caja').animate({ width: '+=50px' }, 1000);
    });
});

$(document).ready(function(){ 
    $('#boton').on('click', function(){ 
        $('#caja').animate({ margin: '+=20px' }, 1000);
    });
});

$(document).ready(function(){ 
    $('#boton').on('click', function(){ 
        $('#caja').animate({ marginLeft: '+=50px' }, 500);
    });
});

$(document).ready(function(){ 
    $('#boton').on('click', function(){ 
        $('#caja').animate({}, 500);
        $('#caja').addClass('animacion');
    });
});
*/

$(document).ready(function(){ 
    $('#boton').on('click', function(){ 
        $('#caja').animate({ marginLeft: '+=40px' }, 500);
        $('.caja').animate({ marginLeft: '-=40px' }, 500);
    });
});