import { changeBackground, createNavbar, eraseElementContent } from "./sharedFunctions";
import boneSVG from './images/hand-drawn-bone.svg'
const body = document.querySelector('body');
const bodyBackgroundColor = '#1D160F';

function createNav(){
    const nav = createNavbar();
    body.appendChild(nav);
};

function createMenuHeader(){
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.classList.add('flex-center-column');
    body.appendChild(wrapper);

    const menuHeader = document.createElement('h1');
    menuHeader.classList.add('page-header');
    menuHeader.textContent = 'Menu';
    wrapper.appendChild(menuHeader);

    const boneImg = document.createElement('img');
    boneImg.src = boneSVG;
    boneImg.alt = 'bone';
    boneImg.id = 'bone';
    wrapper.appendChild(boneImg);
};


function createMenuPage(){
    changeBackground(body, bodyBackgroundColor);
    eraseElementContent(body);
    createNav();
    createMenuHeader();
};

export {createMenuPage};