'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const tabsParent = document.querySelector('.js-services-parent');
    if (!tabsParent) return;

    const tabs = tabsParent.querySelectorAll('.js-services-tab');
    const tabsContent = document.querySelectorAll('.js-service-box');

    if (!tabs.length || !tabsContent.length) return;

    const scrollToContent = (el) => {
        if (!el) return;

        const offset = 20;
        const top =
            el.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top,
            behavior: 'smooth',
        });
    };

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
        // scrollToContent(tabsContent[i]);
    };

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const tab = event.target.closest('.js-services-tab');
        if (!tab) return;

        tabs.forEach((item, i) => {
            if (tab === item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    });
});
