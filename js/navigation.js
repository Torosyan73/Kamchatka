const btnOpenMobileNav = document.querySelector('.header__burger-btn');
const btnCloseMobileNav = document.querySelector('.header__close-btn');
const navListWrapper = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav__item');
const body = document.body;

btnOpenMobileNav.addEventListener('click', function() {  
    navListWrapper.classList.add('nav--show');
    body.classList.add('modal-open');
    navItem.forEach((item, index) => {
        item.addEventListener('click', () => {
            navListWrapper.classList.remove('nav--show');
            body.classList.remove('modal-open');
        });
    });
});

btnCloseMobileNav.addEventListener('click', function() {
    navListWrapper.classList.remove('nav--show');
    body.classList.remove('modal-open');
});