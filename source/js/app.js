(function() {
   let noJsBlock = document.querySelector('.page-header--no-js');
  noJsBlock.classList.remove('page-header--no-js');

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

}());
