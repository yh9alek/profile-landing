import './style.css';
import { HeaderComponent } from './src/components/header/header.js';
import { HomeComponent } from './src/components/home/home.js';

/**
 * 
 * @param {HTMLDivElement} root 
 */
export const main = (root) => {
    HeaderComponent(root);
    HomeComponent(root);
}

main(document.querySelector("#app"));