const btn_menu = document.querySelector('.header__btn-menu');
const menu = document.querySelector('.header__menu');
const background = document.querySelector('.background');

btn_menu.addEventListener('click', e => {
    menu.classList.toggle('active');
    if(menu.classList.contains('active')) { background.classList.add('active'); }
    else 
        background.classList.remove('active');
});