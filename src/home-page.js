import dividerImage from './images/divider.svg';
import broomImage from './images/broom.svg';
import exteriorImage from './images/old-exterior.svg';
import descriptions from './json/long_texts.json' assert {type: 'json'};
import skullDot from './images/skull.png';
import poisonImg from './images/poison.svg';
import pumpkinImage from './images/pumpkin.svg';
import { createFooter, createNavbar, eraseElementContent } from './sharedFunctions';
const body = document.querySelector('body');

function createHeader(){
    const header = document.createElement('header');
    body.appendChild(header);

    const logoNavWrapper = document.createElement('div');
    logoNavWrapper.classList.add('logo-nav-wrapper');
    header.appendChild(logoNavWrapper);

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = 'The Crooked Broom';
    logoNavWrapper.appendChild(logo);

    const divider =  document.createElement('img');
    divider.src = dividerImage;
    divider.alt = 'divider';
    divider.classList.add('divider');
    logoNavWrapper.appendChild(divider);

    const nav = createNavbar();
    logoNavWrapper.appendChild(nav);
};

function createWelcome(){
    const welcomeDiv = document.createElement('div');
    welcomeDiv.classList.add('content');
    welcomeDiv.id = 'greeting';
    body.appendChild(welcomeDiv);

    const welcomeHeader = document.createElement('h1');
    welcomeHeader.classList.add('welcome-hdr');
    welcomeHeader.textContent = 'Welcome to The Crooked Broom';
    welcomeDiv.appendChild(welcomeHeader);

    const broomImg = document.createElement('img');
    broomImg.src = broomImage;
    broomImg.alt = 'broom';
    broomImg.classList.add('broom');
    welcomeDiv.appendChild(broomImg);

    const welcomePsg = document.createElement('p');
    welcomePsg.classList.add('welcome-psg');
    welcomePsg.textContent = getDescriptionByClass('welcome-psg');
    welcomeDiv.append(welcomePsg);
};

function createAbout(){
    const about = document.createElement('div');
    about.classList.add('content');
    about.id = 'about';
    body.appendChild(about);
    
    const flexWrapper = document.createElement('div');
    flexWrapper.classList.add('wrapper');
    flexWrapper.classList.add('flex-start_10vh');
    about.appendChild(flexWrapper);
    
    const exteriorImg = document.createElement('img');
    exteriorImg.classList.add('side-img');
    exteriorImg.id = 'exterior-img';
    exteriorImg.alt = 'restaurant-exterior';
    exteriorImg.src = exteriorImage;
    flexWrapper.appendChild(exteriorImg);

    const sideTextWrapper = document.createElement('div')
    sideTextWrapper.classList.add('sidetext-wrapper');
    flexWrapper.appendChild(sideTextWrapper);

    const historyHeader = document.createElement('h2');
    historyHeader.textContent = 'More than a thousand years of history';
    sideTextWrapper.appendChild(historyHeader);

    const restaurantHistory = document.createElement('p');
    restaurantHistory.textContent = getDescriptionByClass('about');
    sideTextWrapper.appendChild(restaurantHistory);

    const expandBtn = document.createElement('button');
    expandBtn.classList.add('expand-info');
    expandBtn.id = 'learn-more';
    expandBtn.textContent = 'Click to learn more';
    sideTextWrapper.appendChild(expandBtn);
};

function createMenu(){
    const menuContent = document.createElement('div');
    menuContent.classList.add('content');
    menuContent.id = 'menu';
    body.appendChild(menuContent);

    const flexWrapper = document.createElement('div');
    flexWrapper.classList.add('wrapper');
    flexWrapper.classList.add('flex-start_10vh');
    menuContent.appendChild(flexWrapper);

    const sideTextWrapper = document.createElement('div');
    sideTextWrapper.classList.add('sidetext-wrapper');
    flexWrapper.appendChild(sideTextWrapper);

    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Choose your poison';
    sideTextWrapper.appendChild(menuHeader);

    const list = document.createElement('ul');
    sideTextWrapper.appendChild(list);

    const liPotions = document.createElement('li');
    liPotions.classList.add('flex-start');
    list.appendChild(liPotions);
    const dot = document.createElement('img');
    dot.classList.add('dot');
    dot.src = skullDot;
    liPotions.appendChild(dot.cloneNode(true));
    const liText = document.createElement('p');
    liText.textContent = "Potions – A selection of bubbling brews, from the invigorating Elixir of Eternal Wakefulness to the mysteriously smoky Shadowmist Tonic."
    liPotions.appendChild(liText.cloneNode(true));

    const liStews = document.createElement('li');
    liStews.classList.add('flex-start');
    list.appendChild(liStews);
    liStews.appendChild(dot.cloneNode(true));
    liText.textContent = "Deadly Delicious Stews – Try our signature Phoenix Ember Stew or the rich Witch’s Bane Broth—both perfectly safe... probably."
    liStews.appendChild(liText.cloneNode(true));

    const liConfections = document.createElement('li')
    liConfections.classList.add('flex-start');
    list.appendChild(liConfections);
    liConfections.appendChild(dot.cloneNode(true));
    liText.textContent = 'Cursedly Good Confections – The Moonlit Truffle Pie and Sweet Sin Apple Tart might just enchant your taste buds forever.'
    liConfections.appendChild(liText.cloneNode(true));

    const conclusion = document.createElement('p');
    conclusion.textContent = 'Rest assured, our magic is well-measured. Unless, of course, you ask for a little extra danger.'
    sideTextWrapper.appendChild(conclusion);

    const expandBtn = document.createElement('button');
    expandBtn.classList.add('expand-info');
    expandBtn.id = 'learn-more';
    expandBtn.textContent = 'Checkout the menu';
    sideTextWrapper.appendChild(expandBtn);

    const poisonImage = document.createElement('img');
    poisonImage.alt = 'poison';
    poisonImage.id = 'poison-img';
    poisonImage.src = poisonImg;
    poisonImage.classList.add('side-img');
    flexWrapper.appendChild(poisonImage);
};

function createEvents(){
    const eventsContent = document.createElement('div');
    eventsContent.classList.add('content');
    eventsContent.id = 'events';
    body.appendChild(eventsContent);

    const flexWrapper = document.createElement('div');
    flexWrapper.classList.add('wrapper');
    flexWrapper.classList.add('flex-start_10vh');
    eventsContent.appendChild(flexWrapper);

    const pumpkinImg = document.createElement('img');
    pumpkinImg.alt = 'pumpkin';
    pumpkinImg.id = 'pumpkin-img';
    pumpkinImg.classList.add('side-img');
    pumpkinImg.src = pumpkinImage;
    flexWrapper.appendChild(pumpkinImg);

    const sideTextWrapper = document.createElement('div');
    sideTextWrapper.classList.add('sidetext-wrapper');
    flexWrapper.appendChild(sideTextWrapper);

    const eventsHeader = document.createElement('h2');
    eventsHeader.textContent = 'Celebrate the Magic of the Seasons';
    sideTextWrapper.appendChild(eventsHeader);

    const eventsDescription = document.createElement('p');
    eventsDescription.textContent = getDescriptionByClass('events')
    sideTextWrapper.appendChild(eventsDescription);

    const expandBtn = document.createElement('button');
    expandBtn.textContent = 'Click to see scheduled events';
    expandBtn.classList.add('expand-info');
    sideTextWrapper.appendChild(expandBtn);
};

function createReservations(){
    const reservationsContent = document.createElement('div');
    reservationsContent.classList.add('content');
    reservationsContent.id = 'reservations';
    body.appendChild(reservationsContent);

    const flexWrapper = document.createElement('div');
    flexWrapper.classList.add('wrapper');
    flexWrapper.classList.add('flex-start_10vh');
    flexWrapper.classList.add('reservation-wrapper');
    reservationsContent.appendChild(flexWrapper);

    const reservationHeader = document.createElement('h1');
    reservationHeader.textContent = 'Magic awaits!';
    flexWrapper.appendChild(reservationHeader);

    const reservationPromo = document.createElement('p');
    reservationPromo.textContent = 'Reserve your table now and let the feast begin!';
    flexWrapper.appendChild(reservationPromo);

    const expandBtn = document.createElement('button');
    expandBtn.textContent = 'Reservation';
    flexWrapper.appendChild(expandBtn);
};

function getDescriptionByClass(className){
    for(let description of descriptions){
        if(description.class == className){
            return description.text;
        };
    };
    return 'Failed to fetch description';
};

function appendFooter(){
    const footer = createFooter();
    body.appendChild(footer);
}

function createHomePage(){
    eraseElementContent(body);
    createHeader();
    createWelcome();    
    createAbout();
    createMenu();
    createEvents();
    createReservations();
    appendFooter();
};

export {createHomePage, createFooter};