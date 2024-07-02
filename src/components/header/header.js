import './header.css';
import html from './header.html?raw';

/**
 * 
 * @param {HTMLDivElement} root 
 */
export const HeaderComponent = (root) => {
    root.innerHTML += html;
};