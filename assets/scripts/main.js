'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuHandler = () => {
        const menuToggle = document.querySelector('.js-menu-trigger');
        const menuBox = document.querySelector('.js-mob-menu');
        const menuList = menuBox?.querySelector('.js-mob-list');
        const langs = menuBox?.querySelector('.js-mob-menu .lang-switcher');

        if (!menuToggle || !menuBox) return;

        const closeAllInner = () => {
            menuList
                ?.querySelectorAll('li.is-active')
                .forEach((li) => li.classList.remove('is-active'));

            langs?.classList.remove('is-open');
        };

        const openMenu = () => {
            menuBox.classList.add('is-open');
            menuToggle.classList.add('is-active');
            document.body.classList.add('is-locked');
        };

        const closeMenu = () => {
            menuBox.classList.remove('is-open');
            menuToggle.classList.remove('is-active');
            document.body.classList.remove('is-locked');

            closeAllInner();
        };

        const toggleMenu = () => {
            menuBox.classList.contains('is-open') ? closeMenu() : openMenu();
        };

        menuToggle.addEventListener('click', toggleMenu);

        menuList?.addEventListener('click', (e) => {
            const link = e.target.closest('li:has(.mobile-menu__routes) > a');
            if (!link) return;

            e.preventDefault();

            const li = link.closest('li');
            li.classList.toggle('is-active');
        });

        langs?.addEventListener('click', () => {
            langs.classList.toggle('is-open');
        });
    };

    const feedBackFormHandler = () => {
        const triggers = document.querySelectorAll('.js-cta');
        const formBox = document.querySelector('.js-feedback-form');

        if (!triggers.length || !formBox) return;

        const closeBox = formBox.querySelectorAll('.js-feedback-close');
        const formContent = formBox.querySelector('.js-form-content');
        const form = formBox.querySelector('form');

        const successWindow = formBox.querySelector('.js-submit-success');
        const errorWindow = formBox.querySelector('.js-submit-error');

        const openForm = () => {
            formBox.classList.add('is-show');
            document.body.classList.add('is-locked');
        };

        const closeForm = () => {
            formBox.classList.remove('is-show');
            document.body.classList.remove('is-locked');

            setTimeout(() => {
                successWindow.classList.remove('is-show');
                errorWindow.classList.remove('is-show');
                formContent.classList.remove('is-hide');
            }, 400);
        };

        const showMessage = (windowEl, time = 3000) => {
            windowEl.classList.add('is-show');

            windowEl.addEventListener('click', () => {
                windowEl.classList.remove('is-show');
                formContent.classList.remove('is-hide');
            });

            setTimeout(() => {
                windowEl.classList.remove('is-show');
                formContent.classList.remove('is-hide');
            }, time);
        };

        formBox.addEventListener('click', (e) => {
            if (!formContent.contains(e.target)) {
                closeForm();
            }
        });

        triggers.forEach((trigger) => {
            trigger.addEventListener('click', openForm);
        });

        closeBox.forEach((btn) => {
            btn.addEventListener('click', closeForm);
        });

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            formContent.classList.add('is-hide');
            form.reset();
            showMessage(successWindow, 4000);
        });
    };

    const submitHandler = () => {
        const forms = document.querySelectorAll('form');
        if (!forms.length) return;

        forms.forEach((form) => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                form.reset();
            });
        });
    };

    submitHandler();
    mobileMenuHandler();
    feedBackFormHandler();
});
