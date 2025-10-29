ScrollReveal({
    reset: false,
    distance: '10px',
    duration: 800,
    delay: 0,
    viewFactor: 0.2,
    viewOffset: { top: 0, right: 0, bottom: 50, left: 0 }
});

ScrollReveal().reveal('.header', {delay: 0, origin: 'top', distance: '0px'});
ScrollReveal().reveal('.home__title', {delay: 0, origin: 'left'});
ScrollReveal().reveal('.home__desc', {delay: 50, origin: 'left'});
ScrollReveal().reveal('.home__buttons', {delay: 200, origin: 'left'});

ScrollReveal().reveal('.proyects h1', {delay: 0, origin: 'top'});
ScrollReveal().reveal('.proyects h2', {delay: 0, origin: 'top'});
ScrollReveal().reveal('.proyect', {delay: 0, origin: 'top'});

ScrollReveal().reveal('.about__title', {delay: 0, origin: 'left'});
ScrollReveal().reveal('.about__desc', {delay: 0, origin: 'left'});

ScrollReveal().reveal('.profile__hobbies', {delay: 0, origin: 'left'});
ScrollReveal().reveal('.profile__texts', {delay: 0, origin: 'left'});
ScrollReveal().reveal('.asset', {delay: 0, origin: 'left'});