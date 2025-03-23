const btn_menu = document.querySelector('.header__btn-menu');
const menu = document.querySelector('.header__menu');
const background = document.querySelector('.background');
const items = Array.from(document.querySelectorAll('.header__menu > li'));

btn_menu.addEventListener('click', e => {
    menu.classList.toggle('active');
    if(menu.classList.contains('active')) 
        background.classList.add('active');
    else 
        background.classList.remove('active');
});

function checkWindowSize() {
    if (window.innerWidth >= 600 && menu.classList.contains('active')) {
        menu.classList.remove('active');
        background.classList.remove('active');
    }
}

window.addEventListener('load', checkWindowSize);
window.addEventListener('resize', checkWindowSize);

items.forEach(item => {
    item.addEventListener('click', e => {
        menu.classList.remove('active');
        background.classList.remove('active');
    });
});