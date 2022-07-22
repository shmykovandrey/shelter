export class PetsCard {
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
    template += `<p class="pets__name">${this.name}</p>`;
    template += `<button class="button-standart pets__button_standart">Learn more</button>`;
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
