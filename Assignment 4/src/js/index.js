/* global ui, util */

window.onload = function () {
  /**
   * Register click handlers for every menu item in the page.  Use the objects
   * and functions defined in the other JavaScript files to update/populate
   * the #table-rows table body with the appropriate set of countries, based on the
   * menu item clicked, specifically:
   *
   *  - countriesData array of country data Objects
   *  - util methods for working with the country data
   *  - ui methods for working with the DOM
   *
   * Make sure you also update the #subtitle heading to properly reflect what
   * is in the table after you populate it.
   *
   * For example: "List of Countries and Dependencies - Population between 1 and 2 million"
   * or "List of Countries and Dependencies - All countries in Asia" etc.
   */

  // update subtitle based on menu click
  let subTitle = document.getElementById('subtitle');

  // display countries based on the selected language
  let couByLanguage;
  couByLanguage = document.getElementById('menu_english');
  couByLanguage.addEventListener('click', function () {
    subTitle.innerHTML = 'List of Countries and major Dependencies in English';
    ui.countriesToTable(util.countriesByLanguage('English'), 'English');
  });

  couByLanguage = document.getElementById('menu_arabic');
  couByLanguage.addEventListener('click', function () {
    subTitle.innerHTML = 'List of Countries and major Dependencies in Arabic';
    ui.countriesToTable(util.countriesByLanguage('Arabic'), 'Arabic');
  });

  couByLanguage = document.getElementById('menu_chinese');
  couByLanguage.addEventListener('click', function () {
    subTitle.innerHTML = 'List of Countries and major Dependencies in Chinese';
    ui.countriesToTable(util.countriesByLanguage('Chinese'), 'Chinese');
  });

  couByLanguage = document.getElementById('menu_french');
  couByLanguage.addEventListener('click', function () {
    subTitle.innerHTML = 'List of Countries and major Dependencies in French';
    ui.countriesToTable(util.countriesByLanguage('French'), 'French');
  });

  couByLanguage = document.getElementById('menu_hindi');
  couByLanguage.addEventListener('click', function () {
    subTitle.innerHTML = 'List of Countries and major Dependencies in Hindi';
    ui.countriesToTable(util.countriesByLanguage('Hindi'), 'Hindi');
  });

  couByLanguage = document.getElementById('menu_korean');
  couByLanguage.addEventListener('click', function () {
    subTitle.innerHTML = 'List of Countries and major Dependencies in Korean';
    ui.countriesToTable(util.countriesByLanguage('Korean'), 'Korean');
  });

  couByLanguage = document.getElementById('menu_japanese');
  couByLanguage.addEventListener('click', function () {
    subTitle.innerHTML = 'List of Countries and major Dependencies in Japanese';
    ui.countriesToTable(util.countriesByLanguage('Japanese'), 'Japanese');
  });

  couByLanguage = document.getElementById('menu_russian');
  couByLanguage.addEventListener('click', function () {
    subTitle.innerHTML = 'List of Countries and major Dependencies in Russian';
    ui.countriesToTable(util.countriesByLanguage('Russian'), 'Russian');
  });

  // countries with over 100,000,000 population
  let byPopulationGreater = document.getElementById('menu_population_100_000_000m');
  byPopulationGreater.addEventListener('click', function () {
    document.getElementById('subtitle').innerHTML =
      'List of Countries and major Dependencies which have greater than 100 million population';
    ui.countriesToTable(util.countriesByPopulation(100000000), 'English');
  });

  //countries with population between 1 to 2 million
  let byPopulationBetween = document.getElementById('menu_population_1m_2m');
  byPopulationBetween.addEventListener('click', function () {
    document.getElementById('subtitle').innerHTML =
      'List of Countries and major Dependencies which have greater than 1, and less than 2 million population';
    ui.countriesToTable(util.countriesByPopulation(1000000, 2000000), 'English');
  });

  //all of the countries in Americas with area greater than 1 million Km2
  let byAreaAmerica = document.getElementById('menu_americas_1mkm');
  byAreaAmerica.addEventListener('click', function () {
    document.getElementById('subtitle').innerHTML =
      'List of Countries and major Dependencies in Americas, which have greater than 1 million Km2 territory';
    ui.countriesToTable(util.countriesByAreaAndContinent('Americas', 1000000), 'English');
  });

  //all of the countries in Asia
  let byAreaAsia = document.getElementById('menu_asia_all');
  byAreaAsia.addEventListener('click', function () {
    document.getElementById('subtitle').innerHTML =
      'List of Countries and major Dependencies in Asia';
    ui.countriesToTable(util.countriesByAreaAndContinent('Asia', 0), 'English');
  });
};
