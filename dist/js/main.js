//перший слайдер 
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
//другий слайдер 

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

//переніс на останній екран
buttonHireUs.forEach(e=>{
    e.addEventListener("click",()=>{
        mainSlider.slideTo(4);
    })
})

//відкриття меню
headerMenuButton.addEventListener('click',()=>{
    menu.classList.add('menu--active');
    wrapper.classList.add('wrapper--active');
    work.classList.add('work--active');
    addChangesToLinksMenu()
})
//закриття меню
const closeMenu = ()=>{
    menu.classList.remove('menu--active');
    wrapper.classList.remove('wrapper--active');
    work.classList.remove('work--active');
    removeChangesToLinksMenu()
};

//відкриття екрану при натиску елементів меню
menuLinks.forEach((e,n)=>{
    e.addEventListener('click',()=>{
        mainSlider.slideTo(n);
        closeMenu();
        addActiveClassToMenuItem(n);
    });
});
//додавання активного класу до елемента меню 
const addActiveClassToMenuItem = (number)=>{
    menuLinks.forEach(e=>{
        e.parentElement.classList.remove('menu__item--active');
    });
    menuLinks[number].parentElement.classList.add('menu__item--active');
};
//зміна активного класу елементу меню при скролі
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
window.addEventListener('mousewheel',()=>{
    changeActiveClassInMenuItem();
});
window.addEventListener('touchend',()=>{
    changeActiveClassInMenuItem();
});
changeActiveClassInMenuItem()

//добавлення активного класу для кнопок форми
const contactButton = document.querySelectorAll('.work__smallContainer-button');
contactButton.forEach(e=>{
    e.addEventListener('click', ()=>{
        e.classList.toggle('work__smallContainer-button--active');
    })
})

//функціонал плейсхолдера на інпуті
const inputs = document.querySelectorAll('.work__smallContainer-input');
inputs.forEach((e)=>{
    e.addEventListener('focus',()=>{    
        e.nextElementSibling.classList.add('work__smallContainer-label--active');
    })
    e.addEventListener('blur', ()=>{
        if(e.value.length === 0){
            e.nextElementSibling.classList.remove('work__smallContainer-label--active');
        }
    })
})

//перехід по лого до головного екрану   
const Logo = document.querySelector('.header__logo')
Logo.addEventListener('click',()=>{
    mainSlider.slideTo(0);
})

// функції для створення анімації елементам меню
//при появі 
const addChangesToLinksMenu = ()=>{
    const menuItems = document.querySelectorAll('.menu__item');
    let time = 0;
    for(let i = 0; i<menuItems.length; i++){
        time = time + 35;
        setTimeout(() => {
            menuItems[i].style.left = '0px';
            menuItems[i].style.opacity = '1';
            menuItems[i].style.transform = 'translateZ(0px)';
        }, time);
    }  
}
//при після 

const removeChangesToLinksMenu = ()=>{
    const menuItems = document.querySelectorAll('.menu__item');
    let time = 0;
    for(let i = 0; i<menuItems.length; i++){
        time = time + 35;
        setTimeout(() => {
            menuItems[i].style.left = '300px';
            menuItems[i].style.opacity = '1';
            menuItems[i].style.transform = 'translateZ(-520px)';
        }, time);
    }  
}