$(document).ready(function(){

    $('.home').click(function(e){
        e.preventDefault(); 
        $(this).css('color','#3498db');
        $('.settings').css('color','#000000');
        $('#settings').animate({left: '-125%'},350);
        $('#barra').hide('slow');
    });


    $('.settings').click(function(e){
        e.preventDefault();
        $(this).css('color','#3498db');
        $('.home').css('color','#000000');
        $('#settings').animate({left: '0%'},350);
        $('#barra').show('slow');
    });

    $('#barra').click(function(){
        $('.home').css('color','#3498db');
        $('.settings').css('color','#000000');
        $('#settings').animate({left: '-125%'},350);
        $('#barra').hide('slow');
    });


    $('#btnIngles').click(function(){

        localStorage.setItem('idioma', 'ingles');
        
        $('#btnIngles').css('border-color','#2c3e50');
        $('#btnEspañol').css('border-color','#ffffff');

        $('.box.ruben-dario a').attr("href", "rb-ingles.html");
        $('.box.sandino a').attr("href", "san-ingles.html");

        $('.box.ruben-dario .texto').text('"If the country is small, a great one dreams of it"');

        $('.box.sandino .texto').text('"Free country or die"');

        $('.box.juego .texto').text('Discover how much you know about our homeland!');

        $('.box.ruben-dario .button,.box.sandino .button').text("View more");
        
        $('.box.juego .button').text("PLAY");

        $('#settings .tw').html('<i class="fa fa-twitter"></i> Follow on Twitter');
        $('#settings .ins').html('<i class="fa fa-instagram"></i> Follow on Instagram');
        $('#settings .fac').html('<i class="fa fa-facebook"></i> Follow on Facebook');
        $('#settings .config').text('CONFIGURATION');
        $('#settings .lang').text('LANGUAGE');
        $('#settings .rs-title').text('FOLLOW US ON SOCIAL NETWORKS');
        $('#settings .soporte').text('SUPPORT');
        $('#settings .about a').text(' About');
        $('#settings .help a').text(' Help');
        
    });

        $('#btnEspañol').click(function(){

        localStorage.setItem('idioma', 'espanol');
        
        $('#btnEspañol').css('border-color','#2c3e50');
        $('#btnIngles').css('border-color','#ffffff');

        $('.box.ruben-dario a').attr("href", "ruben-dario.html");
        $('.box.sandino a').attr("href", "sandino.html");

        $('.box.ruben-dario .texto').text('"Si pequeña es la patria, uno grande la sueña"');

        $('.box.sandino .texto').text('"Patria libre o morir"');

        $('.box.juego .texto').text('Descubre cuánto sabes de nuestra patria!');

        $('.box.ruben-dario .button,.box.sandino .button').text("ENTRAR");

        $('.box.juego .button').text("Jugar");

        $('#settings .tw').html('<i class="fa fa-twitter"></i> Seguir en Twitter');
        $('#settings .ins').html('<i class="fa fa-instagram"></i> Seguir en Instagram');
        $('#settings .fac').html('<i class="fa fa-facebook"></i> Seguir en Facebook');
        $('#settings .config').text('CONFIGURACIÓN');
        $('#settings .lang').text('IDIOMA');
        $('#settings .rs-title').text('SÍGUENOS EN NUESTRAS REDES SOCIALES');
        $('#settings .soporte').text('SOPORTE');
        $('#settings .about a').text(' Acerca de');
        $('#settings .help a').text(' Ayuda');

    });

        //Verificar idioma al iniciar app

        var idioma = localStorage.getItem('idioma');

        if(idioma == 'ingles'){

          
            $('#btnIngles').css('border-color','#2c3e50');
            $('#btnEspañol').css('border-color','#ffffff');

            $('#settings .tw').html('<i class="fa fa-twitter"></i> Follow on Twitter');
            $('#settings .ins').html('<i class="fa fa-instagram"></i> Follow on Instagram');
            $('#settings .fac').html('<i class="fa fa-facebook"></i> Follow on Facebook');
            $('#settings .config').text('CONFIGURATION');
            $('#settings .lang').text('LANGUAGE');
            $('#settings .rs-title').text('FOLLOW US ON SOCIAL NETWORKS');
            $('#settings .soporte').text('SUPPORT');
            $('#settings .about a').text(' About');
            $('#settings .help a').text(' Help');

            $('.box.ruben-dario a').attr("href", "rb-ingles.html");

            $('.box.sandino a').attr("href", "san-ingles.html");

            $('.box.ruben-dario .texto').text('"If the country is small, a great one dreams of it"');

            $('.box.sandino .texto').text('"Free country or die"');

            $('.box.juego .texto').text('Discover how much you know about our homeland!');

            $('.box.ruben-dario .button,.box.sandino .button').text("View more");
            
            $('.box.juego .button').text("PLAY");

            $('#aleatorio h4').text('ALEATORY');
        


        cambiarIdiomaJuego();


            function cambiarIdiomaJuego(){


            /*Historia*/

            var pregunta1 =    $('.historia').children(':even').slice(1,11);

            //Pregunta 1

            var textoPregunta = pregunta1['9'].children['0'].innerText = 'What was the important event of 1867 occurred in lion metapa?';

            var respuestaUno = pregunta1['9'].children['1'].innerText = 'Sandino injured Dagoberto Rivas with a bullet';

            var respuestaDos = pregunta1['9'].children['2'].innerText = 'Rubén Darío published his first book ';

            var respuestaTres = pregunta1['9'].children['3'].innerText = 'The birth of Félix Rubén García sarmiento';


            //Pregunta 2

            var textoPregunta = pregunta1['8'].children['0'].innerText = 'During what dates was the Constitutionalist War in which Sandino participated?';

            var respuestaUno = pregunta1['8'].children['1'].innerText = '1934 - 1940';

            var respuestaDos = pregunta1['8'].children['2'].innerText = '1905 - 1914';

            var respuestaTres = pregunta1['8'].children['3'].innerText = '1926 - 1927';

                //Pregunta 3

                

            var textoPregunta = pregunta1['7'].children['0'].innerText = 'When was the fight for "El Bramadero?';

            var respuestaUno = pregunta1['7'].children['1'].innerText = '1938';

            var respuestaDos = pregunta1['7'].children['2'].innerText = '1882';

            var respuestaTres = pregunta1['7'].children['3'].innerText = '1928';


            //Pregunta 4

            var textoPregunta = pregunta1['6'].children['0'].innerText = 'Where did Rubén Darío mother live?';

            var respuestaUno = pregunta1['6'].children['1'].innerText = ' Honduras';

            var respuestaDos = pregunta1['6'].children['2'].innerText = 'Spain';

            var respuestaTres = pregunta1['6'].children['3'].innerText = 'Nicaragua';

            //Pregunta 5

            var textoPregunta = pregunta1['5'].children['0'].innerText = 'Where did Darío find work in Chile and at what date?';

            var respuestaUno = pregunta1['5'].children['1'].innerText = '1890 - Diario Buena Fe';

            var respuestaDos = pregunta1['5'].children['2'].innerText = '1916 - Diario El Día';

            var respuestaTres = pregunta1['5'].children['3'].innerText = '1886 - The Epoch Times';


            //Pregunta 6

            var textoPregunta = pregunta1['4'].children['0'].innerText = 'By whom was Rubén Darío introduced to the president in El Salvador?';

            var respuestaUno = pregunta1['4'].children['1'].innerText = 'Francisco Boliva ';

            var respuestaDos = pregunta1['4'].children['2'].innerText = 'Joaquín Méndez';

            var respuestaTres = pregunta1['4'].children['3'].innerText = 'Pedro Mendoza';


            //Pregunta 7

            var textoPregunta = pregunta1['3'].children['0'].innerText = ' Who was a decisive influence on the poetry of Rubén Darío.?';

            var respuestaUno = pregunta1['3'].children['1'].innerText = 'Pedro Mendoza';

            var respuestaDos = pregunta1['3'].children['2'].innerText = 'Sandino';

            var respuestaTres = pregunta1['3'].children['3'].innerText = 'Paul Verlaine';

            //Pregunta 8

            var textoPregunta = pregunta1['2'].children['0'].innerText = 'When was Rubén Daríos Blue published?';

            var respuestaUno = pregunta1['2'].children['1'].innerText = '1888';

            var respuestaDos = pregunta1['2'].children['2'].innerText = '1870';

            var respuestaTres = pregunta1['2'].children['3'].innerText = '1868';

            //Pregunta 9

            var textoPregunta = pregunta1['1'].children['0'].innerText = 'What is the most characteristic symbol of Darío poetry?';

            var respuestaUno = pregunta1['1'].children['1'].innerText = 'Paloma';

            var respuestaDos = pregunta1['1'].children['2'].innerText = 'Swan';

            var respuestaTres = pregunta1['1'].children['3'].innerText = 'Bird';


            //Pregunta 10

            var textoPregunta = pregunta1['0'].children['0'].innerText = 'When is the war officially ended and Sandino army is disarmed?';

            var respuestaUno = pregunta1['0'].children['1'].innerText = 'March 12, 1923';

            var respuestaDos = pregunta1['0'].children['2'].innerText = 'February 2, 1933';

            var respuestaTres = pregunta1['0'].children['3'].innerText = 'April 3, 1915';

            /*Geografia*/

            var pregunta2 =    $('.geografia').children(':even').slice(1,11);

            //Pregunta 1

            var textoPregunta = pregunta2['9'].children['0'].innerText = 'Where was the civilian population bombarded and machine-gunned by the US invasion?';

            var respuestaUno = pregunta2['9'].children['1'].innerText = 'Ocotal';

            var respuestaDos = pregunta2['9'].children['2'].innerText = 'Nueva Segovia';

            var respuestaTres = pregunta2['9'].children['3'].innerText = 'Managua';


            //Pregunta 2

            var textoPregunta = pregunta2['8'].children['0'].innerText = 'Sandino faces for the first time against the conservative troops in?';

            var respuestaUno = pregunta2['8'].children['1'].innerText = 'Santiago de Veragua - Panama';

            var respuestaDos = pregunta2['8'].children['2'].innerText = 'Jicaro - Costa Rica';

            var respuestaTres = pregunta2['8'].children['3'].innerText = 'Granada - Managua';

            //Pregunta 3

            var textoPregunta = pregunta2['7'].children['0'].innerText = 'Sandino leaving his home mechanic job in? ';

            var respuestaUno = pregunta2['7'].children['1'].innerText = 'Estelí - Nicaragua';

            var respuestaDos = pregunta2['7'].children['2'].innerText = 'Guanajato - Mexico';

            var respuestaTres = pregunta2['7'].children['3'].innerText = 'Near the border with Costa Rica';


            //Pregunta 4

            var textoPregunta = pregunta2['6'].children['0'].innerText = 'Augusto Cesar Sandino was born in?';

            var respuestaUno = pregunta2['6'].children['1'].innerText = 'Metapa';

            var respuestaDos = pregunta2['6'].children['2'].innerText = 'Niquinohomo';

            var respuestaTres = pregunta2['6'].children['3'].innerText = 'San Isidro';

            //Pregunta 5

            var textoPregunta = pregunta2['5'].children['0'].innerText = 'Rubén Darío wrote songs of life and hope, the cato errante and the poem of autumn, when he traveled by?';

            var respuestaUno = pregunta2['5'].children['1'].innerText = 'Italy, England, Belgium, Spain';

            var respuestaDos = pregunta2['5'].children['2'].innerText = 'Guatemala, El Salvador, Costa Rica';

            var respuestaTres = pregunta2['5'].children['3'].innerText = 'Mexico, England, Nicaragua';


            //Pregunta 6

            var textoPregunta = pregunta2['4'].children['0'].innerText = 'Rubén Darío fulfilled his wishes by being sent as ambassador of?';

            var respuestaUno = pregunta2['4'].children['1'].innerText = 'Sweden';

            var respuestaDos = pregunta2['4'].children['2'].innerText = 'Spain';

            var respuestaTres = pregunta2['4'].children['3'].innerText = 'Argentina';


            //Pregunta 7

            var textoPregunta = pregunta2['3'].children['0'].innerText = 'Did Miguel Ángel Asturias win a Nobel Prize in literature for talking about?';

            var respuestaUno = pregunta2['3'].children['1'].innerText = 'Katia Cardinal';

            var respuestaDos = pregunta2['3'].children['2'].innerText = 'Carlos Mejía Godoy';

            var respuestaTres = pregunta2['3'].children['3'].innerText = 'Sandino ';

            //Pregunta 8

            var textoPregunta = pregunta2['2'].children['0'].innerText = 'Does Rubén Darío publish Abrojos in? ';

            var respuestaUno = pregunta2['2'].children['1'].innerText = 'Nicaragua';

            var respuestaDos = pregunta2['2'].children['2'].innerText = 'Spain';

            var respuestaTres = pregunta2['2'].children['3'].innerText = 'Chile';

            //Pregunta 9

            var textoPregunta = pregunta2['1'].children['0'].innerText = 'To which Central American country did Rubén go to his 15 years?';

            var respuestaUno = pregunta2['1'].children['1'].innerText = 'Mexico';

            var respuestaDos = pregunta2['1'].children['2'].innerText = 'El Salvador';

            var respuestaTres = pregunta2['1'].children['3'].innerText = 'Guatemala';


            //Pregunta 10

            var textoPregunta = pregunta2['0'].children['0'].innerText = 'Rubén Darío was born in?';

            var respuestaUno = pregunta2['0'].children['1'].innerText = 'Metapa';

            var respuestaDos = pregunta2['0'].children['2'].innerText = 'Leon';

            var respuestaTres = pregunta2['0'].children['3'].innerText = 'RAAS';



            /*Cultura*/
                
            var pregunta3 =    $('.cultura').children(':even').slice(1,11);

            //Pregunta 1
    
            var textoPregunta = pregunta3['9'].children['0'].innerText = 'Who does the pine blossom song refer to?';
    
            //Pregunta 2
    
            var textoPregunta = pregunta3['8'].children['0'].innerText = 'In what language did Rubén Darío write his poems?';
    
            var respuestaUno = pregunta3['8'].children['1'].innerText = 'Spanish and English';
    
            var respuestaDos = pregunta3['8'].children['2'].innerText = 'English';
    
            var respuestaTres = pregunta3['8'].children['3'].innerText = 'Spanish';
    
            //Pregunta 3
    
            var textoPregunta = pregunta3['7'].children['0'].innerText = 'In what region was Rubén Darío born?';
    
            var respuestaUno = pregunta3['7'].children['1'].innerText = 'Atlantic Region';
    
            var respuestaDos = pregunta3['7'].children['2'].innerText = 'Pacific Region';
    
            var respuestaTres = pregunta3['7'].children['3'].innerText = 'Central Region';
    
    
            //Pregunta 4
    
            var textoPregunta = pregunta3['6'].children['0'].innerText = 'To what religion did Augusto Cesar Sandino belong?';
    
            var respuestaUno = pregunta3['6'].children['1'].innerText = 'Catholic Christian';
    
            var respuestaDos = pregunta3['6'].children['2'].innerText = 'Buddhism';
    
            var respuestaTres = pregunta3['6'].children['3'].innerText = 'Neopaganism';
    
            //Pregunta 5
    
            var textoPregunta = pregunta3['5'].children['0'].innerText = 'To which department does Ciudad Sandino belong?';
    
            //Pregunta 6
    
            var textoPregunta = pregunta3['4'].children['0'].innerText = 'What was the first poem written by Rubén Darío?';
    
            var respuestaUno = pregunta3['4'].children['1'].innerText = 'The fatal';
    
            var respuestaDos = pregunta3['4'].children['2'].innerText = 'The faith';
    
            var respuestaTres = pregunta3['4'].children['3'].innerText = 'Caupolican';
            
            
            //Pregunta 7
    
            var textoPregunta = pregunta3['3'].children['0'].innerText = 'What poem was adapted to song?';
    
            var respuestaUno = pregunta3['3'].children['1'].innerText = 'The bale';
    
            var respuestaDos = pregunta3['3'].children['2'].innerText = 'Caupolican';
    
            var respuestaTres = pregunta3['3'].children['3'].innerText = 'The Fatal';
    
            //Pregunta 8
    
            var textoPregunta = pregunta3['2'].children['0'].innerText = 'How is Sandino called? ';
    
            var respuestaUno = pregunta3['2'].children['1'].innerText = 'General of free men and women';
    
            var respuestaDos = pregunta3['2'].children['2'].innerText = 'Hero';
    
            var respuestaTres = pregunta3['2'].children['3'].innerText = 'Dreamer';
    
            //Pregunta 9
    
            var textoPregunta = pregunta3['1'].children['0'].innerText = 'What is the name of the work in honor of Sandino?';
    
            var respuestaUno = pregunta3['1'].children['1'].innerText = 'Free man';
    
            var respuestaTres = pregunta3['1'].children['3'].innerText = 'Tribute to Sandino ';
    
            
            //Pregunta 10
    
            var textoPregunta = pregunta3['0'].children['0'].innerText = 'On what date did the name of the City of Metapa change to Ciudad de Darío?';
    
            var respuestaUno = pregunta3['0'].children['1'].innerText = 'March 19, 2000';
    
            var respuestaDos = pregunta3['0'].children['2'].innerText = 'February 25, 1920';
    
            var respuestaTres = pregunta3['0'].children['3'].innerText = 'January 30, 1984';

            /*Literatura*/

            var pregunta4 =    $('.literatura').children(':even').slice(1,11);

            //Pregunta 1

            var textoPregunta = pregunta4['9'].children['0'].innerText = 'In the blue book ... by Rubén Darío you will find';

            var respuestaUno = pregunta4['9'].children['1'].innerText = 'Songs';

            var respuestaDos = pregunta4['9'].children['2'].innerText = 'Legends';

            var respuestaTres = pregunta4['9'].children['3'].innerText = 'Poems and short stories';

            //Pregunta 2

            var textoPregunta = pregunta4['8'].children['0'].innerText = 'Rubén Darío is the father of ...?';

            var respuestaUno = pregunta4['8'].children['1'].innerText = 'Modernism';

            var respuestaDos = pregunta4['8'].children['2'].innerText = 'Vanguard';

            var respuestaTres = pregunta4['8'].children['3'].innerText = 'Prosaism';

            //Pregunta 3

            var textoPregunta = pregunta4['7'].children['0'].innerText = 'Rubén Darío wrote ...?';

            var respuestaUno = pregunta4['7'].children['1'].innerText = 'On the roads the peasants go';

            var respuestaDos = pregunta4['7'].children['2'].innerText = 'Marianela';

            var respuestaTres = pregunta4['7'].children['3'].innerText = 'Profane prose';


            //Pregunta 4

            var textoPregunta = pregunta4['6'].children['0'].innerText = 'Rubén Darío said ...?';

            var respuestaUno = pregunta4['6'].children['1'].innerText = 'If small is the homeland, a big one dreams of it ';

            var respuestaDos = pregunta4['6'].children['2'].innerText = 'Love is bigger than perfection';

            var respuestaTres = pregunta4['6'].children['3'].innerText = 'The happiness that is lived derives from the love that is given';

            //Pregunta 5

            var textoPregunta = pregunta4['5'].children['0'].innerText = 'In what year Rubén Darío wrote "his masterpiece" Azul ...?';

            var respuestaUno = pregunta4['5'].children['1'].innerText = '1890';

            var respuestaDos = pregunta4['5'].children['2'].innerText = '1888';

            var respuestaTres = pregunta4['5'].children['3'].innerText = '1916';

            //Pregunta 6

            var textoPregunta = pregunta4['4'].children['0'].innerText = 'Sandino said...?';

            var respuestaUno = pregunta4['4'].children['1'].innerText = 'I want free country or die';

            var respuestaDos = pregunta4['4'].children['2'].innerText = 'He who walks a lot and reads a lot, sees a lot and knows a lot';

            var respuestaTres = pregunta4['4'].children['3'].innerText = 'Being a writer is stealing life from death';
            
            
            //Pregunta 7

            var textoPregunta = pregunta4['3'].children['0'].innerText = 'Did Miguel Ángel Asturias win a Nobel Prize in literature for talking about?';

            var respuestaUno = pregunta4['3'].children['1'].innerText = 'Katia Cardinal';

            var respuestaDos = pregunta4['3'].children['2'].innerText = 'Carlos Mejía Godoy';

            var respuestaTres = pregunta4['3'].children['3'].innerText = 'Sandino';

            //Pregunta 8

            var textoPregunta = pregunta4['2'].children['0'].innerText = 'Is Sandino ...?';

            var respuestaUno = pregunta4['2'].children['1'].innerText = 'General of free men and women';

            var respuestaDos = pregunta4['2'].children['2'].innerText = 'An imagery';

            var respuestaTres = pregunta4['2'].children['3'].innerText = 'A soldier';

            //Pregunta 9

            var textoPregunta = pregunta4['1'].children['0'].innerText = 'The sovereignty is not discussed defends itself with weapons in hand. He said this?';

            var respuestaUno = pregunta4['1'].children['1'].innerText = 'Sandino';

            var respuestaDos = pregunta4['1'].children['2'].innerText = 'Cristóbal Colon';

            var respuestaTres = pregunta4['1'].children['3'].innerText = 'Miguel de Cervantes';

            
            //Pregunta 10

            var textoPregunta = pregunta4['0'].children['0'].innerText = 'Did Sandino learn to read at the age of?';

            var respuestaUno = pregunta4['0'].children['1'].innerText = '57 years';

            var respuestaDos = pregunta4['0'].children['2'].innerText = '3 years';

            var respuestaTres = pregunta4['0'].children['3'].innerText = '10 years';



            }

        }


});
