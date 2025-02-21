
export default function createAboutPage() {
  /*
    Create home page
  */
  const home = document.querySelector('#content');

  // Container
  const outerContainer = document.createElement('div');
  outerContainer.classList.add("page");
  outerContainer.classList.add("about");

  // Header
  const h1 = document.createElement('h1');
  h1.textContent = "About us";
  outerContainer.appendChild(h1);




  home.appendChild(outerContainer); 
}