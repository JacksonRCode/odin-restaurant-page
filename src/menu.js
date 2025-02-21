

export default function createMenuPage() {
  /*
    Create home page
  */
  const home = document.querySelector('#content');

  // Container
  const outerContainer = document.createElement('div');
  outerContainer.classList.add("page");

  // Header
  const h1 = document.createElement('h1');
  h1.textContent = "Menu";
  outerContainer.appendChild(h1);

  // Menu container
  const mCont = document.createElement('div');
  mCont.classList.add("menuDiv");

  menuItem(
    "Burger",
    "1/2 pound bison burger topped with bacon, blue cheese, onions, and a garlic aioli. House side salad included.",
    "12",
    mCont
  );

  menuItem(
    "Pizza",
    "Oven roasted thincrust pizza covered with our homemade red sauce and cheese and topped with pepperoni, mushrooms, banana peppers, rec chili flakes, and hot honey.",
    "15",
    mCont
  );

  menuItem(
    "Burrito Bowl",
    "Ground beef and rice in a bowl with lettuce, franks hot sauce, avocado, and a dallop of sour cream.",
    "8",
    mCont
  );

  menuItem(
    "Healthy breakfast",
    "4 eggs cooked with spinach and cheese, and seasoned with salt, pepper, onion powder, and oregano. Side of yoghurt and banana.",
    "9.50",
    mCont
  );

  menuItem(
    "Chicken stir fry",
    "Chicken breast stir fry with rice and an assortment of vegatables. Comes in mild, medium, and SPICY.",
    "12",
    mCont
  );

  menuItem(
    "Chicken Tacos",
    "The tacos include: chicken breast cooked with sauteed onions and peppers, lettuce, avocado, sour cream, shredded cheese, salsa verde, and hot sauce.",
    "15",
    mCont
  );

  outerContainer.appendChild(mCont);
  home.appendChild(outerContainer);
}

function menuItem(title, info, price, papa) {
  const group = document.createElement('div');

  const domTitle = document.createElement('h3');
  domTitle.textContent = title;

  const domPrice = document.createElement('p');
  domPrice.textContent = "$" + price;

  const domInfo = document.createElement('p');
  domInfo.textContent = info;

  const top = document.createElement('div');
  top.appendChild(domTitle);
  top.appendChild(domPrice);
  top.classList.add('menu-group');

  group.appendChild(top);
  group.appendChild(domInfo);

  group.classList.add('menu-item');

  papa.appendChild(group);
}