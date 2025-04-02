import { changeBackground, eraseElementContent } from "./sharedFunctions";
const body = document.querySelector('body');
const bodyBackgroundColor = '#1D160F';

function createNav(){
    const nav = document.createElement('nav');
    body.appendChild(nav);
};

function createMenuHeader(){
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    body.appendChild(wrapper);
}


function createMenuPage(){
    changeBackground(body, bodyBackgroundColor);
    eraseElementContent(body);
    createNav();
};

export {createMenuPage};