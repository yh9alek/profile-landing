import './about.css';
import html from './about.html?raw';

/**
 * 
 * @param {HTMLDivElement} root 
 */
export const AboutComponent = (root) => {
    root.innerHTML += html;
};