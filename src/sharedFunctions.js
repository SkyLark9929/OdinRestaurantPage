import { createHomePage } from "./home-page";
import { createMenuPage } from "./menu";

function changeBackground(element, color){
    element.style.backgroundColor = color;
};

function eraseElementContent(element){
    element.textContent = '';
};

function createNavbar(){
    const buttonNames = [
        {
            name: 'Home',
            function: createHomePage
        }, 
        {
            name: 'Menu',
            function: createMenuPage
        }, 
        {
            name: 'Events',
        }, 
        {
            name: 'Reservations'
        }
    ];
    const nav = document.createElement('nav');

    for(let entry of buttonNames){
        let button = document.createElement('button');
        button.classList.add('nav-button');
        button.textContent = entry.name;
        nav.appendChild(button);
        if(entry.function){
            button.addEventListener('click', entry.function);
        };
    };

    return nav;
};

function createFooter(){
    const footer = document.createElement('footer');

    const footerP = document.createElement('p');
    footerP.innerHTML = `This website is a task for The Odin Project. It is not in any way associated with real brand or company.
            Background images were taken from <a target="_blank" rel="noopener noreferrer" href="https://www.freepik.com">Freepik</a> and were AI-generated. 
            Hand-drawn images are also from <a target="_blank" rel="noopener noreferrer" href="https://www.freepik.com">Freepik</a>, however, they are not AI-generated.`;

    footer.appendChild(footerP);
    return footer;
};

export {changeBackground, eraseElementContent, createFooter, createNavbar};