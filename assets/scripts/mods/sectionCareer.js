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

    const emptyCareerList = () => {
        const careerContent = document.querySelector('.career__content');
        const hiddenText = document.querySelector('.career__hidden');
        const supportSection = document.querySelector('.support');

        if (!careerContent || !hiddenText || !supportSection) return;

        const careerBoxes = careerContent.querySelectorAll('.js-career-box');

        if (careerBoxes.length) {
            hiddenText.style.display = 'none';
            careerContent.style.display = '';
            supportSection.style.display = ''
        } else {
            hiddenText.style.display = '';
            supportSection.style.display = 'none'
            careerContent.style.display = 'none';
        }
    };

    emptyCareerList();
    careerListHandler();
});
