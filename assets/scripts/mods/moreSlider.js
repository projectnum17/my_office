'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const caseSliderHandler = () => {
        const sliderConfig = (selector) => {
            if (typeof Swiper === 'undefined') return;

            const sliderEls = document.querySelector(selector);

            new Swiper(sliderEls, {
                slidesPerView: 1,
                spaceBetween: 16,
                speed: 700,
                breakpoints: {
                    0: {
                        slidesPerView: 1.1,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 1.5,
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 28,
                    },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 28,
                    },
                },
            });
        };
        sliderConfig('.js-more-slider');
    };
    caseSliderHandler();
});
