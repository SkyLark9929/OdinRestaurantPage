import dividerImage from './divider.svg'
import broomImage from './broom.svg'
import descriptions from './long_texts.json' assert {type: 'json'}
const body = document.querySelector('body');

function createHeader(){

    // Header with logo and menu
    const buttonNames = ['Home', 'Menu', 'Events', 'Reservations'];
    const buttonArray = []; // Here we will store nav buttons which later return to the DOM manipulator

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

    const nav = document.createElement('nav');
    logoNavWrapper.appendChild(nav);

    for(let name of buttonNames){
        let button = document.createElement('button');
        button.classList.add('nav-button');
        button.textContent = name;
        nav.appendChild(button);

        buttonArray.push(button);
    };
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

function getDescriptionByClass(className){
    for(let description of descriptions){
        if(description.class == className){
            return description.text;
        } else {
            return 'Failed to fetch description';
        };
    };
};

function createHomePage(){
    createHeader();
    createWelcome();
};

export {createHomePage};