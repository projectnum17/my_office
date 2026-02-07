'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const eventsTabHandler = () => {
        const tabsParent = document.querySelector('.js-event-parent');
        if (!tabsParent) return;

        const tabs = tabsParent.querySelectorAll('.js-event-tab');
        const tabsContent = document.querySelectorAll('.js-event-box');

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
            const tab = event.target.closest('.js-event-tab');
            if (!tab) return;

            tabs.forEach((item, i) => {
                if (tab === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        });
    };
    eventsTabHandler();
});
