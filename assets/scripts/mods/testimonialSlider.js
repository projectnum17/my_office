'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const testimonialsSliderHandler = () => {
        const sliderConfig = (selector) => {
            if (typeof Swiper === 'undefined') return;

            const sliderEls = document.querySelector(selector);

            new Swiper(sliderEls, {
                slidesPerView: 1.1,
                spaceBetween: 16,
                speed: 700,
                navigation: {
                    prevEl: '.js-test-prev',
                    nextEl: '.js-test-next',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1.1,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 28,
                    },
                },
            });
        };
        sliderConfig('.js-testimonials-slider');
    };
    testimonialsSliderHandler();
});
