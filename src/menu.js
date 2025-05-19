import { changeBackground, createNavbar, eraseElementContent } from "./sharedFunctions";
import boneSVG from './images/hand-drawn-bone.svg';
import dividerImage from './images/divider.svg';
import dishes from './json/menu_dishes_list.json' assert {type: 'json'};
import skullDot from './images/skull.png';
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
    wrapper.style.maxWidth = '1000px';
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

function createMenuContents(){
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.classList.add('flex-center-column');
    wrapper.style.maxWidth = '1000px';
    body.appendChild(wrapper);

    for (let category of dishes.categories){
        const menuSectionHeader = document.createElement('h2');
        menuSectionHeader.textContent = category.name;
        wrapper.appendChild(menuSectionHeader);

        const divider = document.createElement('img');
        divider.src = dividerImage;
        divider.alt = 'divider';
        divider.classList.add('divider');
        wrapper.appendChild(divider);

        const dishList = document.createElement('ul');
        dishList.classList.add('flex-start-column');
        wrapper.appendChild(dishList);

        for (let dish of category.items){
            const dishElement = document.createElement('li');
            dishList.appendChild(dishElement);
            dishElement.classList.add('menu-dish-grid');

            const dishDot = document.createElement('img');
            dishDot.classList.add('dot');
            dishDot.src = skullDot;
            dishDot.style.gridArea = 'bp';
            dishElement.appendChild(dishDot);

            const dishName = document.createElement('h3');
            dishName.textContent = dish.name + ' ' + '.'.repeat(300);
            dishName.classList.add('dish-name');
            dishName.style.gridArea = 'nm';
            dishElement.appendChild(dishName);

            const dishPrice = document.createElement('h3');
            dishPrice.textContent = dish.price;
            dishPrice.style.gridArea = 'pr';
            dishElement.appendChild(dishPrice);

            const dishDescription = document.createElement('p');
            dishDescription.textContent = dish.description;
            dishDescription.style.gridArea = 'ds';
            dishElement.appendChild(dishDescription);
        };
    };
};

function createMenuPage(){
    changeBackground(body, bodyBackgroundColor);
    eraseElementContent(body);
    createNav();
    createMenuHeader();
    createMenuContents();
};

export {createMenuPage};