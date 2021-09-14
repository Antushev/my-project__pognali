let noJsBlockHeader = document.querySelector('.page-header--no-js');
noJsBlockHeader.classList.remove('page-header--no-js');

let noJsBlockContent = document.querySelector('.page-content--no-js');
noJsBlockContent.classList.remove('page-content--no-js');

let buttonOpenModal = document.querySelector('.add-profile__button--open');
let buttonCloseModal = document.querySelector('.add-profile__button--close');
let modal = document.querySelector('.add-profile__hidden-block');

buttonOpenModal.addEventListener('click', () => {
  modal.classList.add('add-profile__hidden-block--open');
});

buttonCloseModal.addEventListener('click', () => {
  modal.classList.remove('add-profile__hidden-block--open');
});

document.addEventListener('click', (evt) => {
  if (modal !== evt.target && buttonOpenModal !== evt.target) {
    modal.classList.remove('add-profile__hidden-block--open');
  }
});

let pathOfWhiteLogo = '../img/logo-full.svg';
let pathOfBlueLogo = '../img/logo-full-blue-text.svg';
let pageHeader = document.querySelector('.page-header');
let buttonOpenMenu = pageHeader.querySelector('.page-header__toggle-button');
let logo = pageHeader.querySelector('.logo__img');

buttonOpenMenu.addEventListener('click', () => {
  if (!pageHeader.classList.contains('page-header--open')) {
    pageHeader.classList.add('page-header--open');
    logo.src = pathOfBlueLogo;
  } else {
    pageHeader.classList.remove('page-header--open');
    logo.src = pathOfWhiteLogo;
  }
});

let countriesFilterBlock = document.querySelector('.countries-filter');
let buttonMenuCountriesFilter = countriesFilterBlock.querySelector('.countries-filter__button');
let buttonCloseCountriesFilter = countriesFilterBlock.querySelector('.countries-filter__turn-button');

buttonMenuCountriesFilter.addEventListener('click', () => {
  countriesFilterBlock.classList.toggle('countries-filter--open');
});

buttonCloseCountriesFilter.addEventListener('click', () => {
  countriesFilterBlock.classList.remove('countries-filter--open');
});

