'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const loginTabsHandler = () => {
        const tabsParent = document.querySelector('.js-login-parent');
        if (!tabsParent) return;

        const tabs = tabsParent.querySelectorAll('.js-login-tab');
        const tabsContent = document.querySelectorAll('.js-login-box');

        if (!tabs.length || !tabsContent.length) return;

        const hideTabContent = () => {
            tabsContent.forEach((item) => {
                item.classList.add('tab-hide');
                item.classList.remove('tab-show', 'tab-fade');
            });

            tabs.forEach((item) => {
                item.classList.remove('is-active');
            });
        };

        const showTabContent = (i = 0) => {
            tabsContent[i].classList.add('tab-show', 'tab-fade');
            tabsContent[i].classList.remove('tab-hide');
            tabs[i].classList.add('is-active');
        };

        hideTabContent();
        showTabContent();

        tabsParent.addEventListener('click', (event) => {
            const tab = event.target.closest('.js-login-tab');
            if (!tab) return;

            tabs.forEach((item, i) => {
                if (tab === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        });
    };

    const modalFormHandler = ({
        triggerSelector,
        modalSelector,
        closeSelector,
        contentSelector,
        successSelector,
        errorSelector,
    }) => {
        const triggers = document.querySelectorAll(triggerSelector);
        const formBox = document.querySelector(modalSelector);

        if (!triggers.length || !formBox) return;

        const closeBox = formBox.querySelectorAll(closeSelector);
        const formContent = formBox.querySelector(contentSelector);
        const form = formBox.querySelector('form');

        const successWindow = formBox.querySelector(successSelector);
        const errorWindow = formBox.querySelector(errorSelector);

        const openForm = () => {
            formBox.classList.add('is-show');
            document.body.classList.add('is-locked');
        };

        const closeForm = () => {
            formBox.classList.remove('is-show');
            document.body.classList.remove('is-locked');

            setTimeout(() => {
                successWindow?.classList.remove('is-show');
                errorWindow?.classList.remove('is-show');
                formContent.classList.remove('is-hide');
            }, 400);
        };

        const showMessage = (windowEl, time = 3000) => {
            if (!windowEl) return;

            windowEl.classList.add('is-show');

            const hide = () => {
                windowEl.classList.remove('is-show');
                formContent.classList.remove('is-hide');
            };

            windowEl.addEventListener('click', hide, { once: true });
            setTimeout(hide, time);
        };

        formBox.addEventListener('click', (e) => {
            if (!formContent.contains(e.target)) {
                closeForm();
            }
        });

        triggers.forEach((btn) => btn.addEventListener('click', openForm));
        closeBox.forEach((btn) => btn.addEventListener('click', closeForm));

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            formContent.classList.add('is-hide');
            form.reset();
            showMessage(successWindow, 4000);
        });
    };

    const infoSlidersHandler = ({
        sliderSelector,
        prevSelector,
        nextSelector,
        options = {},
    }) => {
        if (typeof Swiper === 'undefined') return;

        const sliderEl = document.querySelector(sliderSelector);
        if (!sliderEl) return;

        new Swiper(sliderEl, {
            speed: 700,
            navigation: {
                prevEl: prevSelector,
                nextEl: nextSelector,
            },
            ...options,
        });
    };

    modalFormHandler({
        triggerSelector: '.js-download-trigger',
        modalSelector: '.js-download-modal',
        closeSelector: '.js-download-close',
        contentSelector: '.js-download-content',
        successSelector: '.js-download-success',
        errorSelector: '.js-download-error',
    });

    modalFormHandler({
        triggerSelector: '.js-course-trigger',
        modalSelector: '.js-course-modal',
        closeSelector: '.js-course-close',
        contentSelector: '.js-course-content',
        successSelector: '.js-course-success',
        errorSelector: '.js-course-error',
    });

    infoSlidersHandler({
        sliderSelector: '.js-diploma-slider',
        prevSelector: '.js-diploma-prev',
        nextSelector: '.js-diploma-next',
        options: {
            breakpoints: {
                0: {
                    slidesPerView: 1.07,
                    spaceBetween: 16,
                },
                0: { slidesPerView: 1.1, spaceBetween: 16 },
                1024: { slidesPerView: 2, spaceBetween: 16 },
                1440: { slidesPerView: 3, spaceBetween: 28 },
            },
        },
    });

    infoSlidersHandler({
        sliderSelector: '.js-courses-slider',
        prevSelector: '.js-courses-prev',
        nextSelector: '.js-courses-next',
        options: {
            breakpoints: {
                0: { slidesPerView: 1.1, spaceBetween: 16 },
                1024: { slidesPerView: 2, spaceBetween: 16 },
                1440: { slidesPerView: 4, spaceBetween: 28 },
            },
        },
    });
    loginTabsHandler();
});
