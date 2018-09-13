$(function () {

  let compiledTemplate = Handlebars.compile($('#geografia').html());

  if (localStorage.getItem('lang') === 'english') {
    var trivia = {
      "geografia": [{
          "question": "Rubén Darío was born in?",
          "answers": [{
              "type": "correcto",
              "value": "Metapa"
            },
            {
              "type": "error",
              "value": "León"
            },
            {
              "type": "error",
              "value": "RAAS"
            }
          ]
        },
        {
          "question": "To which Central American country did Rubén Darío travel to his 15 years?",
          "answers": [{
              "type": "error",
              "value": "Mexico"
            },
            {
              "type": "correcto",
              "value": "El Salvador"
            },
            {
              "type": "error",
              "value": "Guatemala"
            }
          ]
        },
        {
          "question": "Does Rubén Darío publish Abrojos en?",
          "answers": [{
              "type": "error",
              "value": "Nicaragua"
            },
            {
              "type": "error",
              "value": "Spain"
            },
            {
              "type": "correcto",
              "value": "Chile"
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
          "question": "Rubén Darío fulfilled his wishes by being sent as ambassador of?",
          "answers": [{
              "type": "error",
              "value": "Sweden"
            },
            {
              "type": "correcto",
              "value": "Spain"
            },
            {
              "type": "error",
              "value": "Argentina"
            }
          ]
        },
        {
          "question": "Rubén Darío wrote songs of life and hope, the errant song and the autumn poem, when he was traveling by?",
          "answers": [{
              "type": "correcto",
              "value": "Italy, England, Belgium, Spain"
            },
            {
              "type": "error",
              "value": "Guatemala, El Salvador, Costa Rica"
            },
            {
              "type": "error",
              "value": "Mexico, England, Nicaragua"
            }
          ]
        },
        {
          "question": "Augusto Cesar Sandino was born in?",
          "answers": [{
              "type": "error",
              "value": "Metapa"
            },
            {
              "type": "correcto",
              "value": "Niquinohomo"
            },
            {
              "type": "error",
              "value": "San Isidro"
            }
          ]
        },
        {
          "question": "Sandino when leaving his house as a mechanic?",
          "answers": [{
              "type": "error",
              "value": "Estelí - Nicaragua"
            },
            {
              "type": "error",
              "value": "Guanajato - Mexico"
            },
            {
              "type": "correcto",
              "value": "Near the border with Costa Rica"
            }
          ]
        },
        {
          "question": "Sandino faces for the first time against the conservative troops in?",
          "answers": [{
              "type": "error",
              "value": "Santiago de Veragua - Panama"
            },
            {
              "type": "error",
              "value": "Granada - Managua"
            },
            {
              "type": "correcto",
              "value": "Jicaro - Costa Rica"
            }
          ]
        },
        {
          "question": "Where was the civilian population bombarded and machine-gunned by the US invasion?",
          "answers": [{
              "type": "correcto",
              "value": "Ocotal"
            },
            {
              "type": "error",
              "value": "Nueva Segovia"
            },
            {
              "type": "error",
              "value": "Managua"
            }
          ]
        }
      ]
    }

  } else {
    trivia = {
      "geografia": [{
          "question": "¿Rubén Darío nació en?",
          "answers": [{
              "type": "correcto",
              "value": "Metapa"
            },
            {
              "type": "error",
              "value": "León"
            },
            {
              "type": "error",
              "value": "RAAS"
            }
          ]
        },
        {
          "question": "¿A qué país de centro américa viajo Rubén Darío a sus 15 años?",
          "answers": [{
              "type": "error",
              "value": "México"
            },
            {
              "type": "correcto",
              "value": "El Salvador"
            },
            {
              "type": "error",
              "value": "Guatemala"
            }
          ]
        },
        {
          "question": "¿Rubén Darío  publica Abrojos en?",
          "answers": [{
              "type": "error",
              "value": "Nicaragua"
            },
            {
              "type": "error",
              "value": "España"
            },
            {
              "type": "correcto",
              "value": "Chile"
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
          "question": "¿Rubén Darío cumplió sus deseos al ser enviado como embajador de?",
          "answers": [{
              "type": "error",
              "value": "Suecia"
            },
            {
              "type": "correcto",
              "value": "España"
            },
            {
              "type": "error",
              "value": "Argentina"
            }
          ]
        },
        {
          "question": "¿Rubén Darío escribió cantos de vida y esperanza, el canto errante y el poema de otoño, cuando viajaba por?",
          "answers": [{
              "type": "correcto",
              "value": "Italia, Inglaterra, Bélgica, España"
            },
            {
              "type": "error",
              "value": "Guatemala, El Salvador, Costa Rica"
            },
            {
              "type": "error",
              "value": "México, Inglaterra, Nicaragua"
            }
          ]
        },
        {
          "question": "¿Augusto Cesar Sandino nacio en?",
          "answers": [{
              "type": "error",
              "value": "Metapa"
            },
            {
              "type": "correcto",
              "value": "Niquinohomo"
            },
            {
              "type": "error",
              "value": "San Isidro"
            }
          ]
        },
        {
          "question": "¿Sandino al abandonar su casa trabajo de mecánico en?",
          "answers": [{
              "type": "error",
              "value": "Estelí - Nicaragua"
            },
            {
              "type": "error",
              "value": "Guanajato - Mexico"
            },
            {
              "type": "correcto",
              "value": "Cerca de la frontera con Costa Rica"
            }
          ]
        },
        {
          "question": "¿Sandino se enfrenta por primera vez contra las tropas conservadoras en?",
          "answers": [{
              "type": "error",
              "value": "Santiago de Veragua - Panamá"
            },
            {
              "type": "error",
              "value": "Granada - Managua"
            },
            {
              "type": "correcto",
              "value": "Jicaro - Costa Rica"
            }
          ]
        },
        {
          "question": "¿En donde fue bombardeada y ametrallada la población civil por la invasión norteamericana?",
          "answers": [{
              "type": "correcto",
              "value": "Ocotal"
            },
            {
              "type": "error",
              "value": "Nueva Segovia"
            },
            {
              "type": "error",
              "value": "Managua"
            }
          ]
        }
      ]
    }
  }

  let context = compiledTemplate(trivia);

  $('#container').html(context);

});