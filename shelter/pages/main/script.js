'use strict';

import { petsData } from "../../src/petsData.js";
import { PetsCard } from "../../src/petsCard.js";

const BURGERMENU = document.querySelector('.header__burger-icon');
const BURGERNAVMENU = document.querySelector('.burger-nav__items');
const BTN_NEXT = document.getElementById('btn__next');
const BTN_PREV = document.getElementById('btn__prev');

let sliderNextElem = []
let sliderCenterElem = [];
let sliderPetsCardCount = screen.width > 1279 ? 3 : screen.width > 767 ? 2 : 1;

BURGERMENU.addEventListener('click', openBurgerMenu);
document.querySelector('.carousel').addEventListener('click', clickPetCard);
document.querySelector('.burger-nav__items').addEventListener('click', closeBurgerMenu);
document.querySelector('.overlay').addEventListener('click', closeBurgerMenu);

function openBurgerMenu() {
  BURGERMENU.classList.toggle('active');
  BURGERNAVMENU.classList.toggle('active');
  BURGERNAVMENU.classList.toggle('hide');
  BURGERNAVMENU.classList.remove('start');
  document.querySelector('.logo-mobile').classList.toggle('active');
  document.querySelector('body').classList.toggle('noscroll');
  document.querySelector('.overlay').classList.toggle('hiden');
}

function closeBurgerMenu(event) {
  if (event.target.classList.contains('main-nav_link') || event.target.classList.contains('overlay')) {
    BURGERMENU.classList.toggle('active');
    BURGERNAVMENU.classList.toggle('active');
    BURGERNAVMENU.classList.toggle('hide');
    document.querySelector('.logo-mobile').classList.toggle('active');
    document.querySelector('body').classList.toggle('noscroll');
    document.querySelector('.overlay').classList.toggle('hiden');
  }
}

function clickPetCard(event) {
  if (!event.target.classList.contains('carousel')) {
    createModalWindows(petsData.filter(elem => elem.name == event.path[1].querySelector('p').innerHTML));
  }
}

function createModalWindows(pet) {
  let modalWindowDomElement = document.createElement('div');
  modalWindowDomElement.classList.add('overlay__modal');
  document.querySelector('.footer').append(modalWindowDomElement);
  document.querySelector('body').classList.toggle('noscroll');
  modalWindowDomElement.append(new PetsCard(pet[0]).petsModalWindow())
  document.querySelector('.overlay__modal').addEventListener('click', closeModalWindows)
}

function closeModalWindows(event) {
  if (event.target.classList.contains('overlay__modal') || event.target.classList.contains('modal__close-btn')) {
    document.querySelector('body').classList.toggle('noscroll');
    document.querySelector('.overlay__modal').remove();
  }

}

//Slider

for (let i = 0; i < sliderPetsCardCount; i++) {
  sliderCenterElem.push(petsData[i]);
  sliderNextElem = generateRandomOtherCards();
}

function renderSlider() {
  document.querySelector('#carousel-center').innerHTML = '';
  sliderCenterElem.forEach(elem => document.querySelector('#carousel-center').append(new PetsCard(elem).petsCardSlider()));
  document.querySelector('#carousel-prev').innerHTML = '';
  sliderNextElem.forEach(elem => document.querySelector('#carousel-prev').append(new PetsCard(elem).petsCardSlider()));
  document.querySelector('#carousel-next').innerHTML = '';
  sliderNextElem.forEach(elem => document.querySelector('#carousel-next').append(new PetsCard(elem).petsCardSlider()));
}

document.querySelector('.carousel').addEventListener('animationend', () => {
  document.querySelector('.carousel').classList.remove('carousel-next-animation')
  document.querySelector('.carousel').classList.remove('carousel-prev-animation')
  sliderCenterElem = sliderNextElem;
  sliderNextElem = generateRandomOtherCards();
  renderSlider()
})

BTN_NEXT.addEventListener('click', (event) => {
  document.querySelector('.carousel').classList.add('carousel-next-animation')
})

BTN_PREV.addEventListener('click', (event) => {
  document.querySelector('.carousel').classList.add('carousel-prev-animation')
})

function generateRandPetsDataArr() {
  let arr = petsData.map(elem => elem);
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
  }
  return newArr;
}

function generateRandomOtherCards() {
  let arr = generateRandPetsDataArr();
  arr = arr.filter(elem => !(sliderCenterElem.includes(elem)));
  return arr.splice(0, sliderPetsCardCount);
}

window.onload = function () {
  renderSlider();
}
