let quotes = $('.quote');
let lang = '';

let menuCount = 0;
// Open settings menuu
$('.hamburger-menu').click(function () {
    if (menuCount === 0) {
        $('#settings').animate({
            right: '0',
            opacity: '1'
        }, 250);
        $(this).children().addClass('close');
        $('body').css('overflowY', 'hidden');
        menuCount++;
    } else {
        // Close settings menu
        $('#settings').animate({
            right: '-100%',
            opacity: '0'
        }, 250);
        $(this).children().removeClass('close');
        $('body').css('overflowY', 'scroll');
        menuCount = 0;
    }
});


$('#btnIngles').click(function () {
    lang = 'english';
    localStorage.setItem('lang', lang);
    change_to_english();
});

$('#btnEspanol').click(function () {
    lang = 'spanish';
    localStorage.setItem('lang', lang);
    change_to_spanish();
});


function change_to_english() {
    // Home
    quotes[0].innerText = `"If the homeland is small, a big one dreams of it"`;
    quotes[1].innerText = `"Homeland free or diet"`;
    quotes[2].innerText = `Discover how much you know about our homeland!`;
    // Home - Settings
    $('.title').text('CONFIGURATION');
    $('.lang').text('LANGUAGE');
    $('.rs-title').text('FOLLOW US ON OUR SOCIAL NETWORKS');
    // Pages   
    $('.card-detail a')[0].href = "pages/rb-ingles.html";
    $('.card-detail a')[1].href = "pages/rb-ingles.html";
    $('.card-detail a')[2].href = "pages/san-ingles.html";
    $('.card-detail a')[3].href = "pages/san-ingles.html";
}

function change_to_spanish() {
    // Home
    quotes[0].innerText = `"Si pequeña es la patria, uno grande la sueña"`;
    quotes[1].innerText = `"Patria libre o morir"`;
    quotes[2].innerText = `Descubre cuánto sabes de nuestra patria!`;
    // Home - Settings
    $('.title').text('CONFIGURACIÓN');
    $('.lang').text('IDIOMA');
    $('.rs-title').text('SÍGUENOS EN NUESTRAS REDES SOCIALES');
    // Pages   
    $('.card-detail a')[0].href = "pages/ruben-dario.html";
    $('.card-detail a')[1].href = "pages/ruben-dario.html";
    $('.card-detail a')[2].href = "pages/sandino.html";
    $('.card-detail a')[3].href = "pages/sandino.html";
}

if (localStorage.getItem('lang') === 'english') {
    change_to_english();
} else {
    change_to_spanish();
}
