(function() {
  let noJsBlockHeader = document.querySelector('.page-header--no-js');

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
}());
