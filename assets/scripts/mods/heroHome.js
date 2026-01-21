'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.js-cursor');
    if (!section) return;

    section.addEventListener('mousemove', (e) => {
        // Получаем координаты самой секции на странице
        const rect = section.getBoundingClientRect();

        // Вычисляем положение курсора относительно секции в пикселях
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Передаем значения в CSS переменные
        section.style.setProperty('--x', `${x}px`);
        section.style.setProperty('--y', `${y}px`);
    });

    // Опционально: показываем эффект только при наведении
    section.addEventListener('mouseenter', () => {
        section.style.setProperty('--opacity', '1');
    });

    section.addEventListener('mouseleave', () => {
        section.style.setProperty('--opacity', '0');
    });
});
