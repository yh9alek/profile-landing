import './footer.css';
import html from './footer.html?raw';

/**
 * 
 * @param {HTMLDivElement} root 
 */
export const FooterComponent = (root) => {
    root.innerHTML += html;
}