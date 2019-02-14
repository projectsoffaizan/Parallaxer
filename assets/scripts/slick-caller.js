//Event Slider
$('.event-slider').slick({
    prevArrow: $('.ct-bx-next'),
    nextArrow: $('.ct-bx-prev'),
    dots: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear',
    autoplay: false,
    infinite: true
});
//Event Slider
$('.get-slider').slick({
    prevArrow: $('.wd-arrow-prev'),
    nextArrow: $('.wd-arrow-next'),
    dots: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear',
    autoplay: false,
    infinite: true
});
//content-box-slide
$('.content-box-slide .slider').slick({
    prevArrow: $('.slick-next'),
    nextArrow: $('.slick-prev'),
    dots: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear',
    autoplay: false,
    infinite: true
});
//event-slider-with-date
$('.event-slider-with-date').slick({
    prevArrow: $('.ct-bx-ex-next'),
    nextArrow: $('.ct-bx-ex-prev'),
    dots: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear',
    autoplay: false,
    infinite: true
});


$('.world-slider .slideshow').slick({
    prevArrow: $('.wd-arrow-prev'),
    nextArrow: $('.wd-arrow-next'),
    dots: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear',
    autoplay: false,
    infinite: true
})


$('.arrow-glow-slider').slick({
    nextArrow: $('.glow-arrow-next'),
    prevArrow: $('.glow-arrow-prev'),
    dots: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear',
    autoplay: false,
    infinite: true
})

$('.sm-slider').slick({
    prevArrow: $('.blue-next'),
    nextArrow: $('.blue-prev'),
    dots: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear',
    autoplay: false,
    infinite: true
})

$('.slider-txt-box').slick({
    nextArrow: $('.slider-lft-box'),
    prevArrow: $('.slider-rght-box'),
    dots: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear',
    autoplay: false,
    infinite: true
})

$('.alsf-fc-slider').slick({
    prevArrow: $('.slider-lft-box'),
    nextArrow: $('.slider-rght-box'),
    dots: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear',
    autoplay: false,
    infinite: true
})

$('.room-fw-slider .slider').slick({
    prevArrow: $('.fw-next'),
    nextArrow: $('.fw-prev'),
    dots: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear',
    autoplay: false,
    infinite: true
})


$('.cd-with-slider .slider').slick({
    prevArrow: $('.cd-next'),
    nextArrow: $('.cd-prev'),
    dots: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear',
    autoplay: false,
    infinite: true
})

$('.zh-mini-slider .slider').slick({
    prevArrow: $('.zh-next'),
    nextArrow: $('.zh-prev'),
    dots: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear',
    autoplay: false,
    infinite: true
})

$('.alsf-rm-slider .slider').slick({
    prevArrow: $('.alsf-rm-next'),
    nextArrow: $('.alsf-rm-prev'),
    dots: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear',
    autoplay: false,
    infinite: true
})

$('.alsf-rst-slider .slider').slick({
    prevArrow: $('.ct-bx-next'),
    nextArrow: $('.ct-bx-prev'),
    dots: true,
    buttons: false,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear',
    autoplay: false,
    infinite: true,
});
$(".nav-icon3").click(function () {
    $("html").toggleClass("active-nav");
    $(".main-navigation").toggleClass("active");
    $(this).toggleClass('open');
});

if ($(window).width() < 767 === true) {
//Book table Slider
    $('.slider-mbl-only').slick({
        prevArrow: $('.ct-bx-next'),
        nextArrow: $('.ct-bx-prev'),
        dots: true,
        speed: 500,
        fade: true,
        arrows: true,
        cssEase: 'linear',
        autoplay: false,
        infinite: true
    });



}