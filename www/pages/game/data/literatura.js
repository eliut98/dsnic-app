$(function () {

  let compiledTemplate = Handlebars.compile($('#literatura').html());

  if (localStorage.getItem('lang') === 'english') {
    var trivia = {
      "literatura": [{
          "question": "Did Sandino learn to read at the age of?",
          "answers": [{
              "type": "correcto",
              "value": "57 years"
            },
            {
              "type": "error",
              "value": "3 years"
            },
            {
              "type": "error",
              "value": "10 years"
            }
          ]
        },
        {
          "question": "Sovereignty is not discussed, it defends itself with weapons in hand, did it say that?",
          "answers": [{
              "type": "correcto",
              "value": "Sandino"
            },
            {
              "type": "error",
              "value": "Christopher Columbus"
            },
            {
              "type": "error",
              "value": "Miguel de Cervantes"
            }
          ]
        },
        {
          "question": "Sandino is ...?",
          "answers": [{
              "type": "error",
              "value": "An imaginator"
            },
            {
              "type": "error",
              "value": "A soldier"
            },
            {
              "type": "correcto",
              "value": "General of free men and women"
            }
          ]
        },
        {
          "question": "Did Miguel Ángel Asturias win a Nobel Prize in Literature for talking about?",
          "answers": [{
              "type": "error",
              "value": "Katia Cardenal"
            },
            {
              "type": "error",
              "value": "Carlos Mejía Godoy"
            },
            {
              "type": "correcto",
              "value": "Sandino"
            }
          ]
        },
        {
          "question": "Sandino said?",
          "answers": [{
              "type": "error",
              "value": "He who walks a lot and reads a lot, sees a lot and knows a lot"
            },
            {
              "type": "correcto",
              "value": "I want free country or die"
            },
            {
              "type": "error",
              "value": "To be a writer is to steal life from death"
            }
          ]
        },
        {
          "question": "In what year did Rubén Darío write his masterpiece Azul ...?",
          "answers": [{
              "type": "correcto",
              "value": "1888"
            },
            {
              "type": "error",
              "value": "1890"
            },
            {
              "type": "error",
              "value": "1916"
            }
          ]
        },
        {
          "question": "Rubén Darío said?",
          "answers": [{
              "type": "error",
              "value": "The happiness that is lived derives from the love that is given"
            },
            {
              "type": "correcto",
              "value": "If the country is small, a great one dreams of it"
            },
            {
              "type": "error",
              "value": "Love is greater than perfection"
            }
          ]
        },
        {
          "question": "Rubén Darío wrote?",
          "answers": [{
              "type": "error",
              "value": "The peasants go by the roads"
            },
            {
              "type": "error",
              "value": "Marianela"
            },
            {
              "type": "correcto",
              "value": "Prosas profanas"
            }
          ]
        },
        {
          "question": "Rubén Darío is the father of?",
          "answers": [{
              "type": "error",
              "value": "Vanguard"
            },
            {
              "type": "error",
              "value": "Prosperity"
            },
            {
              "type": "correcto",
              "value": "Modernism"
            }
          ]
        },
        {
          "question": "In the blue book ... of Rubén Darío are",
          "answers": [{
              "type": "correcto",
              "value": "Poems and short stories"
            },
            {
              "type": "error",
              "value": "Songs"
            },
            {
              "type": "error",
              "value": "Legends"
            }
          ]
        }
      ]
    }
  } else {
    trivia = {
      "literatura": [{
          "question": "¿Sandino aprendió a leer a la edad de?",
          "answers": [{
              "type": "correcto",
              "value": "57 años"
            },
            {
              "type": "error",
              "value": "3 años"
            },
            {
              "type": "error",
              "value": "10 años"
            }
          ]
        },
        {
          "question": "La soberanía no se discute se defiende con armas en mano. ¿Esto lo dijo?",
          "answers": [{
              "type": "correcto",
              "value": "Sandino"
            },
            {
              "type": "error",
              "value": "Cristóbal Colon"
            },
            {
              "type": "error",
              "value": "Miguel de Cervantes"
            }
          ]
        },
        {
          "question": "¿Sandino es...?",
          "answers": [{
              "type": "error",
              "value": "Un imaginador"
            },
            {
              "type": "error",
              "value": "Un soldado"
            },
            {
              "type": "correcto",
              "value": "General de los hombres y mujeres libres"
            }
          ]
        },
        {
          "question": "¿Miguel Ángel Asturias gano un premio Nobel de literatura por hablar de?",
          "answers": [{
              "type": "error",
              "value": "Katia Cardenal"
            },
            {
              "type": "error",
              "value": "Carlos Mejía Godoy"
            },
            {
              "type": "correcto",
              "value": "Sandino"
            }
          ]
        },
        {
          "question": "¿Sandino dijo?",
          "answers": [{
              "type": "error",
              "value": "El que anda mucho y lee mucho, ve mucho y sabe mucho"
            },
            {
              "type": "correcto",
              "value": "Yo quiero patria libre o morir"
            },
            {
              "type": "error",
              "value": "Ser escritor es robarle la vida a la muerte"
            }
          ]
        },
        {
          "question": "¿En qué año Rubén Darío escribió “su obra maestra” Azul…?",
          "answers": [{
              "type": "correcto",
              "value": "1888"
            },
            {
              "type": "error",
              "value": "1890"
            },
            {
              "type": "error",
              "value": "1916"
            }
          ]
        },
        {
          "question": "¿Rubén Darío dijo?",
          "answers": [{
              "type": "error",
              "value": "La felicidad que se vive deriva el amor que se da"
            },
            {
              "type": "correcto",
              "value": "Si pequeña es la patria uno grande la sueña"
            },
            {
              "type": "error",
              "value": "El amor es más grande que la perfección"
            }
          ]
        },
        {
          "question": "¿Rubén Darío escribió?",
          "answers": [{
              "type": "error",
              "value": "Por los caminos van los campesinos"
            },
            {
              "type": "error",
              "value": "Marianela"
            },
            {
              "type": "correcto",
              "value": "Prosas profanas"
            }
          ]
        },
        {
          "question": "¿Rubén Darío es el padre del?",
          "answers": [{
              "type": "error",
              "value": "Vanguardia"
            },
            {
              "type": "error",
              "value": "Prosaísmo"
            },
            {
              "type": "correcto",
              "value": "Modernismo"
            }
          ]
        },
        {
          "question": "En el libro azul… de Rubén Darío se encuentran",
          "answers": [{
              "type": "correcto",
              "value": "Poemas y relatos breves"
            },
            {
              "type": "error",
              "value": "Canciones"
            },
            {
              "type": "error",
              "value": "Leyendas"
            }
          ]
        }
      ]
    }
  }

  let context = compiledTemplate(trivia);

  $('#container').html(context);

});