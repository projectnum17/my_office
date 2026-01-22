'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.js-cursor');
    const activeArea = document.querySelector('.js-cursor-hidden');
    if (!cursor || !activeArea) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isActive = false;

    const speed = 0.05;

    activeArea.addEventListener('mouseenter', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;

        currentX = targetX;
        currentY = targetY;

        cursor.style.setProperty('--opacity', '1');
        isActive = true;
    });

    activeArea.addEventListener('mouseleave', () => {
        cursor.style.setProperty('--opacity', '0');
        isActive = false;
    });

    activeArea.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    const animate = () => {
        if (isActive) {
            currentX += (targetX - currentX) * speed;
            currentY += (targetY - currentY) * speed;

            cursor.style.setProperty('--x', `${currentX}px`);
            cursor.style.setProperty('--y', `${currentY}px`);
        }

        requestAnimationFrame(animate);
    };

    animate();
});
