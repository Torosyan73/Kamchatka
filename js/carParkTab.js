const tab = document.querySelectorAll('[data-tab]');
const tabContent = document.querySelectorAll('[data-tab-content]');

tab.forEach(function(item) {
    item.addEventListener('click', function(){

        tab.forEach(function(item) {
            item.classList.remove('car-park__item--active');
        });

        this.classList.add('car-park__item--active');
        
        
        tabContent.forEach(function(item) {
            item.classList.add('car-park__content--hidden'); 
        });

        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('car-park__content--hidden');

    });
});