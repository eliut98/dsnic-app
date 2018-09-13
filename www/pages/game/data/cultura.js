$(function () {

  let compiledTemplate = Handlebars.compile($('#cultura').html());

  if (localStorage.getItem('lang') === 'english') {
    var trivia = {
      cultura: [{
          question: 'On what date did the name of the City of Metapa change to Ciudad de Darío?',
          answers: [{
              type: 'error',
              value: '19 March 2000 '
            },
            {
              type: 'correcto',
              value: '25 February 1920 '
            },
            {
              type: 'error',
              value: '30 January 1984 '
            }
          ]
        },
        {
          question: 'What is the name of the work in tribute to Sandino?',
          answers: [{
              type: 'error',
              value: 'Free man'
            },
            {
              type: 'correcto',
              value: 'Oda Sandino'
            },
            {
              type: 'error',
              value: 'Tribute to Sandino'
            }
          ]
        },
        {
          question: 'How is it called Sandino?',
          answers: [{
              type: 'correcto',
              value: 'General of free men and women'
            },
            {
              type: 'error',
              value: 'Hero'
            },
            {
              type: 'error',
              value: 'Dreamer'
            }
          ]
        },
        {
          question: 'What poem was adapted to song?',
          answers: [{
              type: 'error',
              value: 'The bale'
            },
            {
              type: 'error',
              value: 'Caupolicán'
            },
            {
              type: 'correcto',
              value: 'The fatal'
            }
          ]
        },
        {
          question: 'What was the first poem written by Rubén Darío?',
          answers: [{
              type: 'error',
              value: 'The fatal'
            },
            {
              type: 'correcto',
              value: 'La fe'
            },
            {
              type: 'error',
              value: 'Caupolicán'
            }
          ]
        },
        {
          question: 'To which department does Ciudad Sandino belong?',
          answers: [{
              type: 'error',
              value: 'Estelí'
            },
            {
              type: 'error',
              value: 'León'
            },
            {
              type: 'correcto',
              value: 'Managua'
            }
          ]
        },
        {
          question: 'To what religion did Augusto Cesar Sandino belong?',
          answers: [{
              type: 'correcto',
              value: 'Christian - Catholic'
            },
            {
              type: 'error',
              value: 'Buddhism'
            },
            {
              type: 'error',
              value: 'Neopaganism'
            }
          ]
        },
        {
          question: 'In which region was Rubén Darío born?',
          answers: [{
              type: 'error',
              value: 'Atlantic Region'
            },
            {
              type: 'error',
              value: 'Pacific Region'
            },
            {
              type: 'correcto',
              value: 'Central Region'
            }
          ]
        },
        {
          question: 'In what language did Rubén Darío write his poems',
          answers: [{
              type: 'error',
              value: 'Spanish and English'
            },
            {
              type: 'error',
              value: 'English'
            },
            {
              type: 'correcto',
              value: 'Spanish'
            }
          ]
        },
        {
          question: 'Who does the pine blossom song refer to?',
          answers: [{
              type: 'error',
              value: 'Pablo Antonio Cuadra'
            },
            {
              type: 'error',
              value: 'Rubén Darío'
            },
            {
              type: 'correcto',
              value: 'Sandino'
            }
          ]
        }
      ]
    }
  } else {
    trivia = {
      cultura: [{
          question: '¿En qué fecha cambió el nombre de la Ciudad de Metapa a Ciudad de Darío?',
          answers: [{
              type: 'error',
              value: '19 de Marzo 2000'
            },
            {
              type: 'correcto',
              value: '25 de Febrero 1920'
            },
            {
              type: 'error',
              value: '30 de Enero 1984'
            }
          ]
        },
        {
          question: '¿Cómo se llama la obra en homenaje a Sandino?',
          answers: [{
              type: 'error',
              value: 'Hombre libre'
            },
            {
              type: 'correcto',
              value: 'Oda Sandino'
            },
            {
              type: 'error',
              value: 'Homenaje a Sandino'
            }
          ]
        },
        {
          question: '¿Como es llamado Sandino?',
          answers: [{
              type: 'correcto',
              value: 'General de hombres y mujeres libres'
            },
            {
              type: 'error',
              value: 'Héroe'
            },
            {
              type: 'error',
              value: 'Soñador'
            }
          ]
        },
        {
          question: '¿Qué poema fue adaptado a canción?',
          answers: [{
              type: 'error',
              value: 'El fardo'
            },
            {
              type: 'error',
              value: 'Caupolicán'
            },
            {
              type: 'correcto',
              value: 'Lo fatal'
            }
          ]
        },
        {
          question: '¿Cuál fue el primer poema escrito por Rubén Darío?',
          answers: [{
              type: 'error',
              value: 'Lo fatal'
            },
            {
              type: 'correcto',
              value: 'La fé'
            },
            {
              type: 'error',
              value: 'Caupolicán'
            }
          ]
        },
        {
          question: '¿A qué departamento pertenece Ciudad Sandino?',
          answers: [{
              type: 'error',
              value: 'Estelí'
            },
            {
              type: 'error',
              value: 'León'
            },
            {
              type: 'correcto',
              value: 'Managua'
            }
          ]
        },
        {
          question: '¿A qué religión pertenecía Augusto Cesar Sandino?',
          answers: [{
              type: 'correcto',
              value: 'Cristiana - Católica'
            },
            {
              type: 'error',
              value: 'Budismo'
            },
            {
              type: 'error',
              value: 'Neopaganismo'
            }
          ]
        },
        {
          question: '¿En qué región nació Rubén Darío?',
          answers: [{
              type: 'error',
              value: 'Región del Atlántico'
            },
            {
              type: 'error',
              value: 'Región del Pacifico'
            },
            {
              type: 'correcto',
              value: 'Región Central'
            }
          ]
        },
        {
          question: '¿En qué idioma escribió Rubén Darío sus poemas',
          answers: [{
              type: 'error',
              value: 'Español e Inglés'
            },
            {
              type: 'error',
              value: 'Inglés'
            },
            {
              type: 'correcto',
              value: 'Español'
            }
          ]
        },
        {
          question: '¿A quién hace referencia la canción flor de pino?',
          answers: [{
              type: 'error',
              value: 'Pablo Antonio Cuadra'
            },
            {
              type: 'error',
              value: 'Rubén Darío'
            },
            {
              type: 'correcto',
              value: 'Sandino'
            }
          ]
        }
      ]
    }
  }


  let context = compiledTemplate(trivia);

  $('#container').html(context);

});