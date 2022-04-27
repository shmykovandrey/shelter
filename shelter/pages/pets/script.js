'use strict';
const petsData = [{
        "name": "Jennifer",
        "img": "pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "pets-scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
];
class PetsCard {
    constructor({
        name,
        img,
        type,
        breed,
        description,
        age,
        inoculations,
        diseases,
        parasites
    }) {
        this.name = name;
        this.img = img;
        this.type = type;
        this.breed = breed;
        this.description = description;
        this.age = age;
        this.inoculations = inoculations;
        this.diseases = diseases;
        this.parasites = parasites;
    }
    petsInfo() {
        console.log(`Hello my name is ${this.name}, i'm ${this.type} and ${this.breed},
my age is ${this.age}. ${this.description} `);
    }
    petsCardSlider() {
        let template = '';
        const petCard = document.createElement('div');
        petCard.classList.add('pets__card');
        template += `<img src="../../src/images/${this.img}" alt="${this.name.toLowerCase()}" class="pet__pic"></img>`
        template += `<p class="pets_name">${this.name}</p>`;
        template += `<button class="pets_learn_more">Learn more</button>`;
        petCard.innerHTML = template;
        return petCard;
    }
    petsModalWindow() {
        let template = '';
        const petCard = document.createElement('div');
        petCard.classList.add('modal__window');
        template += `<img src="../../src/images/${this.img}" alt="${this.name.toLowerCase()}" class="pet__pic"></img>`
        template += '<div class="modal__window-content">'
        template += `<h2 class="modal__pets-name">${this.name}</h2>`;
        template += `<h4 class="modal__pets-breed">${this.type} - ${this.breed}</h4>`
        template += `<h5 class="modal__text-content">${this.description}</h5>`
        template += `<ul class='modal__other-items'>`
        template += `<li class='modal__other-item'> <b>Age:</b> ${this.age}</li>`
        template += `<li class='modal__other-item'> <b>Inoculations:</b> ${this.inoculations.join(', ')}</li>`
        template += `<li class='modal__other-item'> <b>Diseases:</b> ${this.diseases.join(', ')}</li>`
        template += `<li class='modal__other-item'> <b>Parasites:</b> ${this.parasites.join(', ')}</li>`
        template += `</ul>`
        template += '</div>'
        template += `<button class="modal__close-btn active_btn_close">&#9747</button>`
        petCard.innerHTML = template;
        return petCard;
    }
}

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
const allPetsRandomGenerated = []
const petsCardCount = screen.width > 1279 ? 8 : screen.width > 767 ? 6 : 3;
const pageNumber = document.querySelector('.is_page span');
const lastPage = 48 / petsCardCount;
const burgerMenu = document.querySelector('.header__burger-icon');
const burgerNavMenu = document.querySelector('.burger-nav__items');

window.onload = function () {
    generateNewPetCard();
    contentGeneration();
    document.querySelector('.pets_pagination').addEventListener('click', paginationClickEvent)
}
burgerMenu.addEventListener('click', openBurgerMenu);

function openBurgerMenu() {
    burgerMenu.classList.toggle('active');
    burgerNavMenu.classList.toggle('active');
    burgerNavMenu.classList.toggle('hide');
    burgerNavMenu.classList.remove('start');
    document.querySelector('.logo-mobile').classList.toggle('active');
    document.querySelector('body').classList.toggle('noscroll');
    document.querySelector('.overlay').classList.toggle('hiden');
}
document.querySelector('.burger-nav__items').addEventListener('click', closeBurgerMenu);
document.querySelector('.overlay').addEventListener('click', closeBurgerMenu);

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

const petCardForModal = document.querySelector('.pets__card_conteiner').addEventListener('click', clickPetCard);

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