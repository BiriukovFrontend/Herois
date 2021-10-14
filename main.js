$(function () {

    $('.piople__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
       
        responsive: [{
            breakpoint: 1210,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
           

            }
        }]

    });

    $('.piople__slider .slick-dots').hover(function (event) {
        $(this).addClass('active');

    });

    $('.btn__menu').on('click', function () {
        $('.nav__list').slideToggle();
    });
});