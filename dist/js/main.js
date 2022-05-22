
const mainSlider = new Swiper('.work',{
    direction: 'vertical',
    effect: "fade",
    hashNavigation: true,
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
const secondSwiper =  new Swiper('.slider-work',{
    slidesPerView: 3,
    slidesPerColumn: 1, 
    loop: true,
    spaceBetween: 50,
    centeredSlides: true,
    breakpoints:{
        320:{
            slidesPerView: 1,
            spaceBetween: 0,

        },
        620:{
            spaceBetween: 20,
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
   

const headerMenuButton = document.querySelector('.header__menu');
const menu = document.querySelector('.menu');
const wrapper = document.querySelector('.wrapper');
const work = document.querySelector('.work');
const menuLinks = document.querySelectorAll('.menu__item-text');
const mainSliderItems = document.querySelectorAll('.work__item');
const buttonHireUs = document.querySelectorAll('.hire-Button');

buttonHireUs.forEach(e=>{
    e.addEventListener("click",()=>{
        mainSlider.slideTo(4);
    })
})
headerMenuButton.addEventListener('click',()=>{
    menu.classList.add('menu--active');
    wrapper.classList.add('wrapper--active');
    work.classList.add('work--active');
})

const closeMenu = ()=>{
    menu.classList.remove('menu--active');
    wrapper.classList.remove('wrapper--active');
    work.classList.remove('work--active');
};

menuLinks.forEach((e,n)=>{
    e.addEventListener('click',()=>{
        mainSlider.slideTo(n);
        closeMenu();
        addActiveClassToMenuItem(n);
    });
});
const addActiveClassToMenuItem = (number)=>{
    menuLinks.forEach(e=>{
        e.parentElement.classList.remove('menu__item--active');
    });
    menuLinks[number].parentElement.classList.add('menu__item--active');
};

const changeActiveClassInMenuItem=()=>{
    mainSliderItems.forEach((e,n)=>{
        if(e.classList.contains('swiper-slide-active')){
            addActiveClassToMenuItem(n);
            if(n !=0 && n !=4){
                buttonHireUs[0].style.display ='block'
            }else{
                buttonHireUs[0].style.display ='none'
            }
        };
    });
};
window.addEventListener('mousemove',()=>{
    changeActiveClassInMenuItem();
});
window.addEventListener('touchend',()=>{
    changeActiveClassInMenuItem();
});