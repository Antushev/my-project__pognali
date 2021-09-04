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
}());
