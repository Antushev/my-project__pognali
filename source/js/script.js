// No JS Script

let noJsBlockHeader = document.querySelector('.page-header--no-js');
noJsBlockHeader.classList.remove('page-header--no-js');

let noJsBlockContent = document.querySelector('.page-content--no-js');
noJsBlockContent.classList.remove('page-content--no-js');

let WIDTH_TABLED = 768;

let pageHeader = document.querySelector('.page-header');
let logo = pageHeader.querySelector('.logo__img');
let logoFull = pageHeader.querySelector('.logo__img-js')

let pathOfWhiteLogoMobile = '../img/logo-mobile-white.svg';
let pathOfBlueLogoMobile = '../img/logo-mobile-blue.svg';

let pathOfWhiteLogoFull = '../img/logo-full.svg';
let pathOfBlueLogoFull = '../img/logo-full-blue-text.svg';

let clientWidth = document.body.clientWidth;

logo.src = clientWidth < WIDTH_TABLED ? '../img/logo-mobile-white.svg' : '../img/logo-full.svg';
logoFull.srcset = '../img/logo-full.svg';

// ---- End No JS Script

// Modal on index.html

let buttonOpenModal = document.querySelector('.add-profile__button--open');
let buttonCloseModal = document.querySelector('.add-profile__button--close');
let modal = document.querySelector('.add-profile__hidden-block');

if (buttonOpenModal) {
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
}

// ---- End modal of index.html

// Menu

let buttonOpenMenu = pageHeader.querySelector('.page-header__toggle-button');

buttonOpenMenu.addEventListener('click', () => {
  if (!pageHeader.classList.contains('page-header--open')) {
    pageHeader.classList.add('page-header--open');
    logo.src = pathOfBlueLogoMobile;
    logoFull.srcset = pathOfBlueLogoFull;
  } else {
    pageHeader.classList.remove('page-header--open');
    logo.src = pathOfWhiteLogoMobile;
    logoFull.srcset = pathOfWhiteLogoFull;
  }
});

// ---- End Menu

// ---- Open countries filter in catalog.html

let countriesFilterBlock = document.querySelector('.countries-filter');

if (countriesFilterBlock) {
  let buttonMenuCountriesFilter = countriesFilterBlock.querySelector('.countries-filter__button');
  let buttonCloseCountriesFilter = countriesFilterBlock.querySelector('.countries-filter__turn-button');

  buttonMenuCountriesFilter.addEventListener('click', () => {
    countriesFilterBlock.classList.toggle('countries-filter--open');
  });

  buttonCloseCountriesFilter.addEventListener('click', () => {
    countriesFilterBlock.classList.remove('countries-filter--open');
  });
}


// ---- End open countries filter on catalog.html
