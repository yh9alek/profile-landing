import './style.css';
import { HeaderComponent } from './src/components/header/header.js';

/**
 * 
 * @param {HTMLDivElement} root 
 */
export const main = (root) => {
    HeaderComponent(root);
}

main(document.querySelector("#app"));