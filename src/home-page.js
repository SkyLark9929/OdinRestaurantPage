import dividerImage from'./divider.svg'

function createHeader(){
    const body = document.querySelector('body');

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

function createHomePage(){
    createHeader()
};

export {createHomePage};