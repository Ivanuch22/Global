new Swiper('.work',{
    direction: 'vertical',
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    speed: 800,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: 'body',
    }
});
new Swiper('.slider-work',{
    slidesPerView: 3,
    slidesPerColumn: 1, 
    loop: true,
    spaceBetween: 50,
    centeredSlides: true,
    breakpoints:{
        320:{
            slidesPerView: 1,
        },
        885:{
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: '.slider-work-button-next',
        prevEl: '.slider-work-button-prev',
    },
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
});
$('.work__smallContainer-button').on('click', function(){
    $('.work__smallContainer-button'). toggleClass('work__smallContainer-button--active');
});

$('.header__menu').on('click', function(){
    $('.menu').toggleClass('menu-active');
    $('.wrapper').toggleClass('wrapper-active');
});