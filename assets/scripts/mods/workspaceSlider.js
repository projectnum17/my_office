'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const sliderEl = document.querySelector('.js-workspace-slider');
    if (!sliderEl || typeof Swiper === 'undefined') return;

    const swiper = new Swiper(sliderEl, {
        slidesPerView: 1,
        spaceBetween: 16,
        speed: 700,
        pagination: {
            el: '.js-workspace-pag',
            clickable: true,
            renderBullet: function (index, className) {
                const slides = sliderEl.querySelectorAll('.swiper-slide');
                const title =
                    slides[index].getAttribute('data-pagination-title') ||
                    'Slide ' + (index + 1);

                return `<button class="${className} workspace__pagination-item">
                            ${title}
                        </button>`;
            },
        },
    });

    sliderEl.addEventListener('click', (e) => {
        if (e.target.closest('.js-next')) swiper.slideNext();
        if (e.target.closest('.js-prev')) swiper.slidePrev();
    });
});
