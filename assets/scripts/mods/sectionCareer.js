'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const careerListHandler = () => {
        const careerBoxes = document.querySelectorAll('.js-career-box');
        if (!careerBoxes.length) return;

        careerBoxes.forEach((box) => {
            box.addEventListener('click', () => {
                const isActive = box.classList.contains('is-active');

                careerBoxes.forEach((item) => {
                    item.classList.remove('is-active');
                });

                if (!isActive) {
                    box.classList.add('is-active');
                }
            });
        });
    };

    careerListHandler();
});
