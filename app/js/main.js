$(document).ready(function() {
    $(".slider__main").owlCarousel({
        items: 1,
    });
    $(".product__content__slider").owlCarousel({
        items: 1,
    });
    // var header = new Headhesive(".header__nav");
    //Модальное окно
    $('[data-modal-show]').click(function() {
        var id = $(this).attr('data-modal-show');
        $('[data-modal="' + id + '"]').css('display', 'flex');
    });
    $('[data-modal-close]').click(function() {
        var id = $(this).attr('data-modal-close');
        $('[data-modal="' + id + '"]').hide();

    });
    $('[data-modal]').click(function() {
        if ($(event.target).closest($(this).find('.modal')).length) return;
        $(this).hide();
    });

    //END Модальное окно


    //Миниатюры галереи
    $(".product__content__slider__item").each(function(i, el) {
        console.log($(el).attr("data-thumb"));
        $(".product__content__slider .owl-dot")
            .eq(i)
            .css("background-image", "url(" + $(el).attr("data-thumb") + ")");
    });
    //END Миниатюры галереи
});