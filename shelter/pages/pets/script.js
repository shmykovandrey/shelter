'use strict';

import { petsData } from "../../src/petsData.js";
import { PetsCard } from "../../src/petsCard.js";

const allPetsRandomGenerated = []
const petsCardCount = screen.width > 1279 ? 8 : screen.width > 767 ? 6 : 3;
const pageNumber = document.querySelector('.is_page span');
const lastPage = 48 / petsCardCount;
const burgerMenu = document.querySelector('.header__burger-icon');
const burgerNavMenu = document.querySelector('.burger-nav__items');

burgerMenu.addEventListener('click', openBurgerMenu);
document.querySelector('.burger-nav__items').addEventListener('click', closeBurgerMenu);
document.querySelector('.overlay').addEventListener('click', closeBurgerMenu);
document.querySelector('.pets__card_conteiner').addEventListener('click', clickPetCard);


function generateNewPetCard() {
  let allPets = []
  for (let i = 1; i <= (48 / petsCardCount); i++) {
    let arr = generateRandPetsDataArr();
    for (let i = 1; i <= petsCardCount; i++) {
      allPets.push(arr.pop());
    }
  }
  allPets.forEach(pet => {
    allPetsRandomGenerated.push(new PetsCard(pet).petsCardSlider())
  });
}

function generateRandPetsDataArr() {
  let arr = petsData.map(elem => elem);
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
  }
  return newArr;
}

function contentGeneration() {
  document.querySelector('.pets__card_conteiner').innerHTML = '';
  for (let i = ((+pageNumber.innerHTML - 1) * petsCardCount); i <= (+pageNumber.innerHTML * petsCardCount - 1); i++) {
    document.querySelector('.pets__card_conteiner').append(allPetsRandomGenerated[i])
  }
}

function paginationClickEvent(event) {
  if (event.target.classList.contains('nextPageBtn') && event.target.classList.contains('enable')) {
    +pageNumber.innerHTML++;
    contentGeneration();
  }
  if (event.target.classList.contains('prevPageBtn') && event.target.classList.contains('enable')) {
    +pageNumber.innerHTML--;
    contentGeneration();
  }
  if (event.target.classList.contains('lastPageBtn') && event.target.classList.contains('enable')) {
    pageNumber.innerHTML = lastPage;
    contentGeneration();
  }
  if (event.target.classList.contains('firstPageBtn') && event.target.classList.contains('enable')) {
    pageNumber.innerHTML = 1;
    contentGeneration();
  }

  renderPagination();
}

function renderPagination() {
  if (+pageNumber.innerHTML == lastPage) {
    document.querySelector('.nextPageBtn').classList.remove('enable');
    document.querySelector('.nextPageBtn').classList.add('disable');
    document.querySelector('.lastPageBtn').classList.remove('enable');
    document.querySelector('.lastPageBtn').classList.add('disable');
  } else {
    document.querySelector('.nextPageBtn').classList.remove('disable');
    document.querySelector('.nextPageBtn').classList.add('enable');
    document.querySelector('.lastPageBtn').classList.remove('disable');
    document.querySelector('.lastPageBtn').classList.add('enable');
  }
  if ((+pageNumber.innerHTML) <= 1) {
    document.querySelector('.firstPageBtn').classList.remove('enable');
    document.querySelector('.firstPageBtn').classList.add('disable');
    document.querySelector('.prevPageBtn').classList.remove('enable');
    document.querySelector('.prevPageBtn').classList.add('disable');
  } else {
    document.querySelector('.firstPageBtn').classList.remove('disable');
    document.querySelector('.firstPageBtn').classList.add('enable');
    document.querySelector('.prevPageBtn').classList.remove('disable');
    document.querySelector('.prevPageBtn').classList.add('enable');
  }
}

function openBurgerMenu() {
  burgerMenu.classList.toggle('active');
  burgerNavMenu.classList.toggle('active');
  burgerNavMenu.classList.toggle('hide');
  burgerNavMenu.classList.remove('start');
  document.querySelector('.logo-mobile').classList.toggle('active');
  document.querySelector('body').classList.toggle('noscroll');
  document.querySelector('.overlay').classList.toggle('hiden');
}

function closeBurgerMenu(event) {
  if (event.target.classList.contains('main-nav_link') || event.target.classList.contains('overlay')) {
    burgerMenu.classList.toggle('active');
    burgerNavMenu.classList.toggle('active');
    burgerNavMenu.classList.toggle('hide');
    document.querySelector('.logo-mobile').classList.toggle('active');
    document.querySelector('body').classList.toggle('noscroll');
    document.querySelector('.overlay').classList.toggle('hiden');
  }
}

function clickPetCard(event) {
  if (!event.target.classList.contains('pets__card_conteiner')) {
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

window.onload = function () {
  generateNewPetCard();
  contentGeneration();
  document.querySelector('.pets_pagination').addEventListener('click', paginationClickEvent)
}
