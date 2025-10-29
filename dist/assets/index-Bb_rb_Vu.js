(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const c=`<div class="background"></div>\r
<header class="header">\r
    <div class="cont">\r
        <div class="container">\r
            <div class="header__person">\r
                <img class="bandera" src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" alt="México">\r
                <figure class="person__figure">\r
                    <img src="https://raw.githubusercontent.com/yh9alek/miscellaneous/02704a740e595c81308a26da824f737f15b0a094/src/Personal/imgs/YOHAN.jpg" alt="Foto">\r
                </figure>\r
                <div>\r
                    <p class="person__title">Yohan Alek</p>\r
                    <p class="person__desc">Software Developer</p>\r
                </div>\r
            </div>\r
            <div class="temp">\r
                <div class="header__btn-menu">\r
                    <i class="bi bi-list"></i>\r
                </div>\r
                <ul class="header__menu">\r
                    <li><a href="#inicio">Inicio</a></li>\r
                    <li><a href="#proyectos">Proyectos</a></li>\r
                    <li><a href="#sobremi">Sobre mí</a></li>\r
                </ul>\r
            </div>\r
        </div>\r
    </div>\r
</header>`,o=e=>{e.innerHTML+=c},l=`<section id="inicio" class="home">\r
    <div class="container">\r
        <div class="home__left">\r
            <p class="home__desc">Yohan Alek</p>\r
            <p class="home__title">Software Developer</p>\r
            <div class="home__buttons">\r
                <div class="white-block"></div>\r
                <a href="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/Personal/src/Yohan%20Alek%20Plazola%20Arangure%20CV.pdf" class="btn buttons__cv">Descargar CV</a>\r
                <a target="_blank" href="https://github.com/yh9alek" class="buttons__git"><i class="bi bi-github"></i></a>\r
            </div>\r
        </div>\r
        <div class="home__right">\r
            <img src="https://www.php.net/images/logos/php-logo-white.svg" alt="">\r
        </div>\r
    </div>\r
</section>`,d=e=>{e.innerHTML+=l},p=`<section id="proyectos" class="proyects">\r
    <div class="container">\r
        <h1>Proyectos</h1>\r
        <h2>Mis proyectos destacados</h2>\r
        <div class="proyect">\r
            <div class="proyect__description">\r
                <div class="description">\r
                    <p class="__title">BlackJack C/C++</p>\r
                    <p class="__desc">Juego de cartas 21 programado en C.</p>\r
                    <p class="__desc">¿Te gusta jugar 21? Ahora puedes jugarlo desde tu consola.</p>\r
                    <div class="proyect__links">\r
                        <a target="_blank" href="https://github.com/yh9alek/blackjack" class="link"><i class="bi bi-github"></i> GitHub</a>\r
                        <div class="tecnologies">\r
                            <img class="item" src="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/Personal/imgs/C.png" alt="C">\r
                            <img class="item" src="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/Personal/imgs/C++ (CPlusPlus).png" alt="CPP">\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <figure class="proyect__figure">\r
                <img src="https://raw.githubusercontent.com/yh9alek/miscellaneous/78b390ff43668f3661149219af6b2acf8bcb8a4c/src/Personal/imgs/blackjack.PNG" alt="Proyecto">\r
            </figure>\r
        </div>\r
        <div class="proyect">\r
            <div class="proyect__description">\r
                <div class="description">\r
                    <p class="__title">Sistema de Tickets</p>\r
                    <p class="__desc">Un sistema web de tickets básico.</p>\r
                    <p class="__desc">Ideal para llevar un control de peticiones de soporte técnico.</p>\r
                    <div class="proyect__links">\r
                        <a target="_blank" href="https://github.com/yh9alek/STicket-Node.js" class="link"><i class="bi bi-github"></i> GitHub</a>\r
                        <div class="tecnologies">\r
                            <img class="item" src="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/Personal/imgs/HTML5.png" alt="HTML">\r
                            <img class="item" src="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/Personal/imgs/CSS3.png" alt="CSS3">\r
                            <img class="item" src="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/Personal/imgs/JavaScript.png" alt="JavaScript">\r
                            <img class="item" src="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/Personal/imgs/Node.js.png" alt="Node.js">\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <figure class="proyect__figure">\r
                <img src="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/STicket/imgs/sticket.png" alt="Proyecto">\r
            </figure>\r
        </div>\r
        <div class="proyect">\r
            <div class="proyect__description">\r
                <div class="description">\r
                    <p class="__title">Calculador de Chi-Cuadrado</p>\r
                    <p class="__desc">Programa de escritorio que calcula reglas de asociación entre 2 variables categóricas o items.</p>\r
                    <p class="__desc">Los cálculos se realizan a partir de una tabla binaria, que puede ser cargada tanto manualmente como desde un Excel.</p>\r
                    <div class="proyect__links">\r
                        <a target="_blank" href="https://github.com/yh9alek/chi-square-Java" class="link"><i class="bi bi-github"></i> GitHub</a>\r
                        <div class="tecnologies">\r
                            <img class="item" src="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/Personal/imgs/Java.png" alt="HTML">\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <figure class="proyect__figure">\r
                <img src="https://raw.githubusercontent.com/yh9alek/miscellaneous/e06e7ffd71051a2785cda0d22cdf6e8562209a18/src/Chi-square/imgs/codigo.PNG" alt="Proyecto">\r
            </figure>\r
        </div>\r
        <div class="proyect">\r
            <div class="proyect__description">\r
                <div class="description">\r
                    <p class="__title">FreshCart: Pagina Web Ecommerce</p>\r
                    <p class="__desc">Un prototipo de tienda en línea.</p>\r
                    <p class="__desc">Proyecto personal para practicar mis habilidades de desarollo.</p>\r
                    <div class="proyect__links">\r
                        <a target="_blank" href="https://github.com/yh9alek/fresh-cart-landing" class="link"><i class="bi bi-github"></i> GitHub</a>\r
                        <div class="tecnologies">\r
                            <img class="item" src="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/Personal/imgs/HTML5.png" alt="HTML">\r
                            <img class="item" src="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/Personal/imgs/CSS3.png" alt="CSS3">\r
                            <img class="item" src="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/Personal/imgs/JavaScript.png" alt="JavaScript">\r
                            <img class="item" src="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/Personal/imgs/PHP.png" alt="PHP">\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <figure class="proyect__figure">\r
                <img src="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/FreshCart/imgs/fresh-banner.jpg" alt="Proyecto">\r
            </figure>\r
        </div>\r
        <div class="proyect">\r
            <div class="proyect__description">\r
                <div class="description">\r
                    <p class="__title">Expediente Electrónico UPSIN</p>\r
                    <p class="__desc">Sistema de Registro General de Consultas Médicas.</p>\r
                    <p class="__desc">Programa de escritorio con base de datos, vinculado a Google Sheets para estadísticas y análisis.<br><br> (Repositorio privado)</p>\r
                    <div class="proyect__links">\r
                        <div class="tecnologies">\r
                            <img style="margin-left: 0;" class="item" src="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/Personal/imgs/Java.png" alt="Java">\r
                            <img class="item" src="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/Personal/imgs/MySQL.png" alt="MySQL">\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <figure class="proyect__figure">\r
                <img src="https://raw.githubusercontent.com/yh9alek/miscellaneous/e7d31d5fb74100779a1d7928aaaa7ff451ef6dc7/src/EEPE/imgs/codigo.PNG" alt="Proyecto">\r
            </figure>\r
        </div>\r
    </div>\r
</section>`,m=e=>{e.innerHTML+=p},u=`<section id="sobremi" class="about">\r
    <div class="container">\r
        <h1 class="about__title">Sobre mi</h1>\r
        <h2 class="about__desc">Desarrollador de Software</h2>\r
        <div class="profile">\r
            <div class="profile__texts">\r
                <div class="profile__top">\r
                    <div class="profile__name">Yohan Alek Plazola Arangure</div>\r
                    <div class="profile__hobbies">\r
                        <i class="bi bi-controller"></i>\r
                        <i class="bi bi-music-note-beamed"></i>\r
                        <i class="bi bi-bicycle"></i>\r
                        <i class="bi bi-body-text"></i>\r
                    </div>\r
                </div>\r
                <p class="__desc">Me gusta la programación, aportar soluciones, trabajar en equipo y aprender de los demás. Autodidacta, proactivo y amante del café.</p>\r
            </div>\r
            <img class="asset" src="https://raw.githubusercontent.com/yh9alek/miscellaneous/main/src/Personal/imgs/livewire.png" alt="Livewire">\r
        </div>\r
    </div>\r
</section>`,g=e=>{e.innerHTML+=u},h=`<footer id="contacto">\r
    <div class="container">\r
        <h1 class="footer__title">Contacto</h1>\r
        <a href="mailto:yh9dev@gmail.com" class="email"><i class="bi bi-envelope-fill"></i>&ThinSpace;&ThinSpace; Yohan Alek Plazola Arangure </a><br>\r
        <i class="bi bi-telephone-fill"></i>&ThinSpace;&ThinSpace; +52 6691087140\r
    </div>\r
</footer>`,v=e=>{e.innerHTML+=h},b=e=>{o(e),d(e),m(e),g(e),v(e)};b(document.querySelector("#app"));document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll('a[href^="#"]');for(const i of e)i.addEventListener("click",function(a){a.preventDefault();const n=this.getAttribute("href"),r=document.querySelector(n).getBoundingClientRect().top+window.pageYOffset-60;window.scrollTo({top:r,behavior:"smooth"})})});
