ScrollReveal({
    reset: true,
    distance: '10px',
    duration: 1000,
    delay: 0,
    viewFactor: 0.2,
    viewOffset: { top: 0, right: 0, bottom: 100, left: 0 }
});

ScrollReveal().reveal('.header', {delay: 0, origin: 'top', distance: '0px'});
ScrollReveal().reveal('.home__title', {delay: 0, origin: 'left'});
ScrollReveal().reveal('.home__desc', {delay: 100, origin: 'left'});
ScrollReveal().reveal('.home__buttons', {delay: 200, origin: 'left'});