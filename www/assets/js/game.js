$(function () {

  let score = 0;

  $('.correcto').click(function () {
    score += 10;
    $('.number').text(score);
    $('.final-score').text(score);
    $(this).addClass('btn-success');
    setTimeout(() => {
      $(this).parent().parent().hide();
    }, 1000);
    $('.final').css('display', 'flex');
  });

  $('.error').click(function () {
    score -= 5;
    $('.number').text(score);
    $('.final-score').text(score);
    $(this).addClass('btn-error');
    $(this).siblings('.correcto').addClass('btn-success');
    setTimeout(() => {
      $(this).parent().parent().hide();
    }, 1200);
  });

  function change_to_english() {

    for (let i = 0; i < 10; i++) {
      $('.icons-detail .exit')[i].innerHTML = `
      <span>exit</span>
      <span class="text">✖</span>
    `;

      $('.icons-detail .score')[i].innerHTML = `
      <span>score</span>
      <span class="number">0</span>
    `;
    }

    $('.final span').text('Score');
    $('.final a').text('Return to Menu');
    $('.cultura .title h1').text('Culture');
    $('.geografia .title h1').text('Geography');
    $('.historia .title h1').text('History');
    $('.literatura .title h1').text('Literature');
  }

  function change_to_spanish() {
    for (let i = 0; i < 10; i++) {
      $('.icons-detail .exit')[i].innerHTML = `
      <span>salir</span>
      <span class="text">✖</span>
    `;

      $('.icons-detail .score')[i].innerHTML = `
      <span>puntos</span>
      <span class="number">0</span>
    `;
    }
    $('.final span').text('Puntos');
    $('.final a').text('Volver al Menú');
    $('.cultura .title h1').text('Cultura');
    $('.geografia .title h1').text('Geografía');
    $('.historia .title h1').text('Historia');
    $('.literatura .title h1').text('Literatura');
  }


  if (localStorage.getItem('lang') === 'english') {
    change_to_english();
  } else {
    change_to_spanish();
  }



});