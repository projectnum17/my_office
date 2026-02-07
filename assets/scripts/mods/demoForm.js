'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const demoFormHandler = () => {
        const triggers = document.querySelectorAll('.js-demo-trigger');
        const formBox = document.querySelector('.js-demo-modal');

        if (!triggers.length || !formBox) return;

        const closeBox = formBox.querySelectorAll('.js-demo-close');
        const formContent = formBox.querySelector('.js-demo-content');
        const form = formBox.querySelector('form');

        const successWindow = formBox.querySelector('.js-demo-success');
        const errorWindow = formBox.querySelector('.js-demo-error');

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
    demoFormHandler();
});
