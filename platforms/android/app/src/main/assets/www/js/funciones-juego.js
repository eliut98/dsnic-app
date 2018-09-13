$(document).ready(function(){

    var idioma = localStorage.getItem('idioma');

    if(idioma == 'ingles'){

        $('.continuar').text('Continue');
        $('.ptc').text('Putuation');
        $('.volver-menu').text('Back to menu');

        $('.titulo').text('WELCOME');
        $('.sub_titulo').text('How to play');
        $('.instrucciones').text('Choose the category you want to play and answer the questions, at the end of the game your score will be shown.');

        $('.categoria.hist h4').text('HISTORY');
        $('.categoria.geo h4').text('GEOGRAPHY');
        $('.categoria.cult h4').text('CULTURE');
        $('.categoria.lit h4').text('LITERATURE');

        $('.historia .titulo-categoria').text('HISTORY');
        $('.geografia .titulo-categoria').text('GEOGRAPHY');
        $('.cultura .titulo-categoria').text('CULTURE');
        $('.literatura .titulo-categoria').text('LITERATURE');

    }

    $('.categoria.hist').click(function(e){
        e.preventDefault(); 
        $('#juego .historia').show();
    });

    $('.categoria.geo').click(function(e){
        e.preventDefault(); 
        $('#juego .geografia').show();
    });

    $('.categoria.cult').click(function(e){
        e.preventDefault(); 
        $('#juego .cultura').show();
    });

    $('.categoria.lit').click(function(e){
        e.preventDefault(); 
        $('#juego .literatura').show();
    });

    var puntuacion = 0;

    $('.error').click(function(){
        
        var valorTexto = $(this).parent().children('.correcto').text();

        if(idioma == 'ingles'){
            $('.respuesta').text('INCORRECT'); 
        } else{
            $('.respuesta').text('INCORRECTO'); 
        }

        $('.correcta').text(valorTexto);    

        $('.pregunta.next').css('background','#c0392b');
        
        $(this).parent().hide();

        $('.pregunta button').removeClass('bajar');
        
    }); 

    $('.correcto').click(function(){

        puntuacion += 10;

        if(idioma == 'ingles'){
            $('.respuesta').text('CORRECT'); 
        } else{
            $('.respuesta').text('CORRECTO'); 
        }

        $('.correcta').text(""); 

        $('.pregunta.next').css('background','#27ae60');

        $(this).parent().hide();

        $('.pregunta button').removeClass('bajar');

        
    });


    $('.continuar').click(function(){

         $(this).parent().hide();

     });

     
    $('.continuar.ultima').click(function(){
        
        $('.puntuacion').show();

        $(this).parent().hide();

        if(puntuacion >= 50){

            if(idioma == 'ingles'){

                $('.resultado').text('Congratulations. Very well done!');
    
            }else{

                $('.resultado').text('Felicidades. Muy bien hecho!');

            }

            $('#puntos').addClass('bien');

            $('#puntos').text(puntuacion);


        }else{

            if(idioma == 'ingles'){

                $('.resultado').text('Good try keeps studying');

            }else{

                $('.resultado').text('Buen intento sigue estudiando');
        
            }

            $('#puntos').addClass('mal').css('color','red');

            $('#puntos').text(puntuacion);

        }

    });


    $('#aleatorio').click(function(e){

        e.preventDefault();

        var numAleatorio = Math.floor((Math.random() * 4 ) + 1 );

        $('.categoria').css('box-shadow','none');

        switch(numAleatorio){

            case 1:

                $('.categoria.hist').text('');

                $('.categoria.hist').addClass('animar');
            
                setTimeout(function(){
                    $('.categoria.hist').hide();
                    $('#juego .historia').show();
                }, 2000);

            break;

            case 2:

                $('.categoria.geo').text('');

                $('.categoria.geo').addClass('animar');
                
                setTimeout(function(){
                    $('.categoria.geo').hide();
                    $('#juego .geografia').show();
                }, 2000);

            break;

            case 3:

                $('.categoria.cult').text('');

                $('.categoria.cult').addClass('animar');
                
                setTimeout(function(){
                    $('.categoria.cult').hide();
                    $('#juego .cultura').show();
                }, 2000);

            break;

            case 4:

                $('.categoria.lit').text('');

                $('.categoria.lit').addClass('animar');
                
                setTimeout(function(){
                    $('.categoria.lit').hide();
                    $('#juego .literatura').show();
                }, 2000);

            break;

        }

    });


});