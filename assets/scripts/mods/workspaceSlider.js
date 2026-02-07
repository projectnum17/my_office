'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const workspaceSliderHandler = () => {
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
            on: {
                init: function () {
                    const secondPagination = document.querySelector(
                        '.js-workspace-pag-bull',
                    );
                    if (secondPagination) {
                        for (let i = 0; i < this.slides.length; i++) {
                            const bullet = document.createElement('span');
                            bullet.classList.add('swiper-pagination-bullet');
                            if (i === 0)
                                bullet.classList.add(
                                    'swiper-pagination-bullet-active',
                                );
                            bullet.addEventListener('click', () =>
                                this.slideTo(i),
                            );
                            secondPagination.appendChild(bullet);
                        }
                    }
                },
                slideChange: function () {
                    const bullets = document.querySelectorAll(
                        '.js-workspace-pag-bull .swiper-pagination-bullet',
                    );
                    bullets.forEach((bullet, index) => {
                        bullet.classList.toggle(
                            'swiper-pagination-bullet-active',
                            index === this.activeIndex,
                        );
                    });
                },
            },
        });

        sliderEl.addEventListener('click', (e) => {
            if (e.target.closest('.js-next')) swiper.slideNext();
            if (e.target.closest('.js-prev')) swiper.slidePrev();
        });
    };
    workspaceSliderHandler();
});
