$(document).ready(function () {
    $(".slider__main").owlCarousel({
        items: 1,
    });
    $(".product__content__slider").owlCarousel({
        items: 1,
    });
    // var header = new Headhesive(".header__nav");
    //Модальное окно
    $("[data-modal-show]").click(function () {
        var id = $(this).attr("data-modal-show");
        $('[data-modal="' + id + '"]').css("display", "flex");
    });
    $("[data-modal-close]").click(function () {
        var id = $(this).attr("data-modal-close");
        $('[data-modal="' + id + '"]').hide();
    });
    $("[data-modal]").click(function () {
        if ($(event.target).closest($(this).find(".modal")).length) return;
        $(this).hide();
    });

    //END Модальное окно

    //Миниатюры галереи
    $(".product__content__slider__item").each(function (i, el) {
        console.log($(el).attr("data-thumb"));
        $(".product__content__slider .owl-dot")
            .eq(i)
            .css("background-image", "url(" + $(el).attr("data-thumb") + ")");
    });
    //END Миниатюры галереи

    //Гамбургер
    $(".header__head__hamburger").click(function () {
        $(this).toggleClass("active");
        $(".mobile__nav__wrapper").toggleClass("active");
        $("body").toggleClass("hidden");
    });
    //END Гамбургер

    //Яндекс Карта
    ymaps.ready(init);
    var myMapAll;

    function init() {
        myMapAll = new ymaps.Map("contacts__map", {
            center: [55.763356, 49.234954],
            zoom: 10,
        });
        var myPlacemark_1 = new ymaps.Placemark([55.763356, 49.234954], {
            balloonContentHeader: "Название объекта",
            balloonContentBody: "Описание объекта",
            balloonContentFooter: "",
            hintContent: "Кликните для более подробной информации",
        });
        myMapAll.geoObjects.add(myPlacemark_1);
    }
    //END Яндекс Карта
});
