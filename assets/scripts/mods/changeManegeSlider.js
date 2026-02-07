'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const menageSliderHandler = () => {
        const sliderConfig = (selector) => {
            if (typeof Swiper === 'undefined') return;

            const sliderEls = document.querySelector(selector);

            new Swiper(sliderEls, {
                slidesPerView: 1,
                spaceBetween: 16,
                speed: 700,
                pagination: {
                    el: '.js-manege-pag',
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 28,
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 28,
                    },
                },
            });
        };
        sliderConfig('.js-manage-slider');
    };
    menageSliderHandler();
});
