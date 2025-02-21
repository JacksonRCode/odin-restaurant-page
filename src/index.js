import "./defaultStyles.css";
import "./styles.css";
import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createAboutPage from "./about.js";


function clearPage() {
  const container = document.querySelector('#content');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

(function listen() {
  createHomePage();
  const home = document.querySelector('.home');
  const menu = document.querySelector('.menu');
  const about = document.querySelector('.about');

  home.addEventListener('click', () => {
    clearPage();
    createHomePage();
  });
  
  menu.addEventListener('click', () => {
    clearPage();
    createMenuPage();
  });

  about.addEventListener('click', () => {
    clearPage();
    createAboutPage();
  });
})();