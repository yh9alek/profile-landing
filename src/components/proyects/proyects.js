import './proyects.css';
import html from './proyects.html?raw';

/**
 * 
 * @param {HTMLDivElement} root 
 */
export const ProyectsComponent = (root) => {
    root.innerHTML += html;
}