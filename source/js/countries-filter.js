(function () {
  let countriesFilterBlock = document.querySelector('.countries-filter');
  if (!countriesFilterBlock) {
    return;
  }

  let buttonMenuCountriesFilter = countriesFilterBlock.querySelector('.countries-filter__button');
  let buttonCloseCountriesFilter = countriesFilterBlock.querySelector('.countries-filter__turn-button');

  buttonMenuCountriesFilter.addEventListener('click', () => {
    countriesFilterBlock.classList.toggle('countries-filter--open');
  });

  buttonCloseCountriesFilter.addEventListener('click', () => {
    countriesFilterBlock.classList.remove('countries-filter--open');
  });
}())
