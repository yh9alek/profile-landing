import './home.css';
import html from './home.html?raw';

/**
 * 
 * @param {HTMLDivElement} root 
 */
export const HomeComponent = (root) => {
    root.innerHTML += html;
}