(function() {
  let noJsBlock = document.querySelector('.page-header--no-js');
  noJsBlock.classList.remove('page-header--no-js');

  let pageHeader = document.querySelector('.page-header');
  let buttonOpenMenu = pageHeader.querySelector('.page-header__toggle-button');
  buttonOpenMenu.addEventListener('click', () => {
    if (!pageHeader.querySelector('.page-header--open')) {
      pageHeader.classList.add('page-header--open');
    } else {
      pageHeader.classList.remove('page-header--open');
    }
  });
}());
