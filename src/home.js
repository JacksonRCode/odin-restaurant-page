import lettuceImg from "./images/lettucePic.jpg";
import locationImage from "./images/locationPicture.jpg";

export default function createHomePage() {
  /*
    Create home page
  */
  const home = document.querySelector('#content');

  // Container
  const outerContainer = document.createElement('div');
  outerContainer.classList.add("page");
  outerContainer.classList.add("homePage");

  // Header
  const h1 = document.createElement('h1');
  h1.textContent = "Welcome to Fred's Diner!";
  outerContainer.appendChild(h1);

  // **********************************************************
  // Source local tidbit 
  const localDiv = document.createElement('div');
  localDiv.classList.add('group');

  // Source p
  const pSource = document.createElement('p');
  pSource.textContent = "We source local. Owned and operated out of Victoria BC, we take pride in providing our customers with the freshest local ingredients."
  localDiv.appendChild(pSource);

  // Source img
  const lImg = document.createElement('img');
  lImg.src = lettuceImg;
  lImg.alt = "Lettuce!";
  localDiv.appendChild(lImg);

  // https://unsplash.com/photos/person-picking-green-cabbage-aqrIcYonB-o
  outerContainer.appendChild(localDiv);

  // **********************************************************
  // Hours
  const hoursDiv = document.createElement('div');
  hoursDiv.classList.add('hours');

  // Hours list

  const hoursH3 = document.createElement('h3');
  hoursH3.textContent = "Hours:";

  const innerHoursDiv = document.createElement('div');
  innerHoursDiv.classList.add('group');

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const hours = ["10:00am - 2:00am", "6:00am - 10:00pm", "6:00am - 10:00pm", "6:00am - 10:00pm", "6:00am - 10:00pm", "6:00am - 10:00pm", "10:00am - 2:00am"];

  const ulDays = document.createElement('ul');
  const ulHours = document.createElement('ul');

  ulDays.classList.add('ulLeft');

  for (let i = 0; i < 7; i++) {
    let liDay = document.createElement('li');
    let liHour = document.createElement('li');

    liDay.textContent = days[i];
    liHour.textContent = hours[i];

    ulDays.appendChild(liDay);
    ulHours.appendChild(liHour);
  }

  innerHoursDiv.appendChild(ulDays);
  innerHoursDiv.appendChild(ulHours);

  hoursDiv.appendChild(hoursH3);
  hoursDiv.appendChild(innerHoursDiv);
  outerContainer.appendChild(hoursDiv);

  // **********************************************************
  // Location
  const locationDiv = document.createElement('div');
  locationDiv.classList.add('group');

  // Location img
  const locationImg = document.createElement('img');
  locationImg.src = locationImage;
  locationImg.alt = "Lettuce!";
  locationDiv.appendChild(locationImg);

  // Location p
  const pLocation = document.createElement('p');
  pLocation.textContent = "Come visit us for a great meal at 421 Cherrikee Crescent, Victoria BC";
  locationDiv.appendChild(pLocation);

  outerContainer.appendChild(locationDiv);



  // https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA
  


  home.appendChild(outerContainer);
}

