$(function() {

    // Ищем наш <script>(шаблон) с id "#mobileTemplate"/'#mainTemplate' и получаем содержимое.
    var $mobileTemplate = $('#mobileTemplate').html(),
        $mainTemplate = $('#mainTemplate').html();

    // Рендер функция в которую передаем шаблон и данные для подставления(по необходимости).
    // В шаблонизатор нельзя в качестве данных вставить массив, он принимает !ТОЛЬКО! объект.
    var mobileRender = tmpl($mobileTemplate),
        mainRender = tmpl($mainTemplate);

    // Функция шаблон заполняющая HTML
    function pushHTML() {
        if (window.matchMedia('only screen and (max-width : 736px)').matches) {
            $('.main').empty();
            $('.main').append(mobileRender);
            // Обработчик аккордеона
            $('.h1_func_button').on('click', function(e) {
                e.preventDefault();
                $(this).next().slideToggle('slow');
            });
        } else if (window.matchMedia('only screen and (min-width : 737px)').matches) {
            $('.main').empty();
            $('.main').append(mainRender);
        }
    }

    // Заполняем HTML
    pushHTML();

    // обработчик @media
    $(window).resize(function() {
        pushHTML();
    });

});
