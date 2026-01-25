'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const articleSliderHandler = () => {
        if (typeof Swiper === 'undefined') return;

        const sliderEls = document.querySelector('.js-article-slider');

        new Swiper(sliderEls, {
            slidesPerView: 1.1,
            spaceBetween: 24,
            speed: 700,
            navigation: {
                prevEl: '.js-article-prev',
                nextEl: '.js-article-next',
            },
            pagination: {
                el: '.js-article-pag',
                type: 'fraction',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.1,
                    spaceBetween: 24,
                },
                768: {
                    slidesPerView: 2,
                },
                1440: {
                    slidesPerView: 1,
                },
            },
        });
    };
    articleSliderHandler();
});
