import './style.css';
import { HeaderComponent } from './src/components/header/header.js';
import { HomeComponent } from './src/components/home/home.js';
import { ProyectsComponent } from './src/components/proyects/proyects.js';

/**
 * 
 * @param {HTMLDivElement} root 
 */
export const main = (root) => {
    HeaderComponent(root);
    HomeComponent(root);
    ProyectsComponent(root);
}

main(document.querySelector("#app"));

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
  
    for (const link of links) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 60;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      });
    }
  });