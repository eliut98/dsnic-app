$(function () {

  let compiledTemplate = Handlebars.compile($('#historia').html());

  if (localStorage.getItem('lang') === 'english') {
   var trivia = {
      "historia": [{
          "question": "When is the war officially ended and Sandino's army is disarmed?",
          "answers": [{
              "type": "error",
              "value": "March 12, 1923"
            },
            {
              "type": "correcto",
              "value": "February 2, 1933"
            },
            {
              "type": "error",
              "value": "April 3, 1915"
            }
          ]
        },
        {
          "question": "What is the most characteristic symbol of Darío's poetry?",
          "answers": [{
              "type": "error",
              "value": "Paloma"
            },
            {
              "type": "correcto",
              "value": "Swan"
            },
            {
              "type": "error",
              "value": "Bird"
            }
          ]
        },
        {
          "question": "When was Rubén Darío's blue published?",
          "answers": [{
              "type": "correcto",
              "value": "1888"
            },
            {
              "type": "error",
              "value": "1870"
            },
            {
              "type": "error",
              "value": "1868"
            }
          ]
        },
        {
          "question": "Who was a decisive influence on the poetry of Rubén Darío?",
          "answers": [{
              "type": "error",
              "value": "Pedro Mendoza"
            },
            {
              "type": "error",
              "value": "Sandino"
            },
            {
              "type": "correcto",
              "value": "Paul Verlaine"
            }
          ]
        },
        {
          "question": "By whom was Rubén Darío presented to the president in El Salvador?",
          "answers": [{
              "type": "error",
              "value": "Francisco Boliva"
            },
            {
              "type": "correcto",
              "value": "Joaquín Méndez"
            },
            {
              "type": "error",
              "value": "Pedro Mendoza"
            }
          ]
        },
        {
          "question": "Where did Darío find work in Chile and on what date?",
          "answers": [{
              "type": "error",
              "value": "1890 - Diario Buena Fe"
            },
            {
              "type": "error",
              "value": "1916 - Diario El Día"
            },
            {
              "type": "correcto",
              "value": "1886 - Diario La Época"
            }
          ]
        },
        {
          "question": "Where did Rubén Darío's mother live?",
          "answers": [{
              "type": "correcto",
              "value": "Honduras"
            },
            {
              "type": "error",
              "value": "Spain"
            },
            {
              "type": "error",
              "value": "Nicaragua"
            }
          ]
        },
        {
          "question": "When did El Bramadero fight?",
          "answers": [{
              "type": "error",
              "value": "1938"
            },
            {
              "type": "error",
              "value": "1882"
            },
            {
              "type": "correcto",
              "value": "1928"
            }
          ]
        },
        {
          "question": "During what dates was the Constitutionalist War in which Sandino participated?",
          "answers": [{
              "type": "error",
              "value": "1934 - 1940"
            },
            {
              "type": "error",
              "value": "1905 - 1914"
            },
            {
              "type": "correcto",
              "value": "1926 - 1927"
            }
          ]
        },
        {
          "question": "What was the important event of 1867 occurred in metapa lion?",
          "answers": [{
              "type": "error",
              "value": "Sandino shot Dagoberto Rivas"
            },
            {
              "type": "error",
              "value": "Rubén Darío published his first book"
            },
            {
              "type": "correcto",
              "value": "The birth of Félix Rubén García sarmiento"
            }
          ]
        }
      ]
    }
  } else {
    trivia = {
      "historia": [{
          "question": "¿Cuándo termina oficialmente la guerra y el ejercito de Sandino es desarmado?",
          "answers": [{
              "type": "error",
              "value": "12 de Marzo 1923"
            },
            {
              "type": "correcto",
              "value": "2 de Febrero 1933"
            },
            {
              "type": "error",
              "value": "3 de Abril 1915"
            }
          ]
        },
        {
          "question": "¿Cuál es El símbolo más característico de la poesía de Darío?",
          "answers": [{
              "type": "error",
              "value": "Paloma"
            },
            {
              "type": "correcto",
              "value": "Cisne"
            },
            {
              "type": "error",
              "value": "Pájaro"
            }
          ]
        },
        {
          "question": "¿Cuándo fue publicado azul de Rubén Darío?",
          "answers": [{
              "type": "correcto",
              "value": "1888"
            },
            {
              "type": "error",
              "value": "1870"
            },
            {
              "type": "error",
              "value": "1868"
            }
          ]
        },
        {
          "question": "¿Quién fue una influencia decisiva en la poesía de Rubén Darío?",
          "answers": [{
              "type": "error",
              "value": "Pedro Mendoza"
            },
            {
              "type": "error",
              "value": "Sandino"
            },
            {
              "type": "correcto",
              "value": "Paul Verlaine"
            }
          ]
        },
        {
          "question": "¿Por quién fue presentado Rubén Darío al presidente en el salvador?",
          "answers": [{
              "type": "error",
              "value": "Francisco Boliva"
            },
            {
              "type": "correcto",
              "value": "Joaquín Méndez"
            },
            {
              "type": "error",
              "value": "Pedro Mendoza"
            }
          ]
        },
        {
          "question": "¿Dónde encontró Darío trabajo en chile y en qué fecha?",
          "answers": [{
              "type": "error",
              "value": "1890 - Diario Buena Fe"
            },
            {
              "type": "error",
              "value": "1916 - Diario El Día"
            },
            {
              "type": "correcto",
              "value": "1886 - Diario La Época"
            }
          ]
        },
        {
          "question": "¿Dónde vivía la madre de Rubén Darío?",
          "answers": [{
              "type": "correcto",
              "value": "Honduras"
            },
            {
              "type": "error",
              "value": "España"
            },
            {
              "type": "error",
              "value": "Nicaragua"
            }
          ]
        },
        {
          "question": "¿Cuándo se dio el combate de El Bramadero?",
          "answers": [{
              "type": "error",
              "value": "1938"
            },
            {
              "type": "error",
              "value": "1882"
            },
            {
              "type": "correcto",
              "value": "1928"
            }
          ]
        },
        {
          "question": "¿Durante que fechas se dio la Guerra Constitucionalista en la que participo Sandino?",
          "answers": [{
              "type": "error",
              "value": "1934 – 1940"
            },
            {
              "type": "error",
              "value": "1905 – 1914"
            },
            {
              "type": "correcto",
              "value": "1926 – 1927"
            }
          ]
        },
        {
          "question": "¿Cuál fue el acontecimiento importante de 1867 ocurrido en metapa león?",
          "answers": [{
              "type": "error",
              "value": "Sandino hirió de bala a Dagoberto Rivas"
            },
            {
              "type": "error",
              "value": "Rubén Darío público su primer libro"
            },
            {
              "type": "correcto",
              "value": "El nacimiento de Félix Rubén García sarmiento"
            }
          ]
        }
      ]
    }
  }

  let context = compiledTemplate(trivia);

  $('#container').html(context);

});