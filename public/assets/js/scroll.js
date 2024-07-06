ScrollReveal({
    reset: true,
    distance: '10px',
    duration: 1000,
    delay: 0,
});

ScrollReveal().reveal('.header', {delay: 0, origin: 'top', distance: '0px'});
ScrollReveal().reveal('.home__title', {delay: 0, origin: 'left'});
ScrollReveal().reveal('.home__desc', {delay: 100, origin: 'left'});
ScrollReveal().reveal('.home__buttons', {delay: 200, origin: 'left'});