function changeBackground(element, color){
    element.style.backgroundColor = color;
};

function eraseElementContent(element){
    element.textContent = '';
};

function createNavbar(){
    const buttonNames = ['Home', 'Menu', 'Events', 'Reservations'];
    const nav = document.createElement('nav');

    for(let name of buttonNames){
        let button = document.createElement('button');
        button.classList.add('nav-button');
        button.textContent = name;
        nav.appendChild(button);
    };

    return nav;
};

function createFooter(){
    const footer = document.createElement('footer');
    body.appendChild(footer);

    const footerP = document.createElement('p');
    footerP.innerHTML = `This website is a task for The Odin Project. It is not in any way associated with real brand or company.
            Background images were taken from <a target="_blank" rel="noopener noreferrer" href="https://www.freepik.com">Freepik</a> and were AI-generated. 
            Hand-drawn images are also from <a target="_blank" rel="noopener noreferrer" href="https://www.freepik.com">Freepik</a>, however, they are not AI-generated.`;

    return footer;
};

export {changeBackground, eraseElementContent, createFooter, createNavbar};