/* global util */

//const { doc } = require('prettier');

/**
 * Helper functions for building and working with UI elements.
 */

// eslint-disable-next-line no-unused-vars
const ui = {
  /**
   * Clears (any) existing rows from the #table-rows table body element.
   */
  clearTable: function () {
    // let outputTable = document.querySelector('#outputTable');
    // let tableBody = document.getElementById('table-rows');
    // if (tableBody) {
    //   outputTable.removeChild(tableBody);
    // }
    let tableBody = document.getElementById('table-rows');
    tableBody.innerHTML = '';
    // for (let i = table.rows.length - 1; i > 0; i--) {
    //   table.deleteRow(i);
    // }
  },

  /**
   * Decorates (i.e., adds) a `lang` attribute to the given HTML element using the
   * provided `language`.  For example, if a table data element was passed
   * to this function, and the language was "French", the element would
   * be updated to look like this in the DOM:
   *
   *   <td lang="fr">...</td>
   *
   * Your function should accept the following language names, and return the
   * associated 2-letter language code:
   *
   *  - English: "en"
   *  - Arabic: "ar"
   *  - Chinese: "zh"
   *  - French: "fr"
   *  - Hindi: "hi"
   *  - Korean: "ko"
   *  - Japanese: "ja"
   *  - Russian: "ru"
   *
   * If any other language name is given, return the "unknown" language code,
   * which is represented by the empty string "" (e.g., <p lang="">...</p>)
   *
   * See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
   *
   * Use util.langCodeForLanguage to get the 2-letter language code.
   *
   * @param {HTMLElement} element - the element to decorate with a lang attribute
   * @param {String} language - the language name to use
   */
  addLangToElement: function (element, language) {
    let code;
    if (
      language === 'English' ||
      language === 'Arabic' ||
      language === 'Chinese' ||
      language === 'French' ||
      language === 'Hindi' ||
      language === 'Korean' ||
      language === 'Japanese' ||
      language === 'Russian'
    ) {
      code = util.langCodeForLanguage(language);
    } else {
      code = '';
    }
    element.lang = code;

    //let e = document.getElementById(element);
    //if (!e.hasAttribute('lang')) {
    //element.setAttribute('lang', code);
    // }
    //let elem = document.getElementById(element);
    // let lang = document.createAttribute('lang');
    // lang.value = code;
    // let e = element.setAttribute(lang);
    return element;
  },

  /**
   * Takes a `country.code` (e.g., "CA" for Canada) and returns a URL
   * to the image for this country's flag on the Country Flags web service:
   * https://www.countryflags.io/.  For example, given the country code String
   * "CA" and a size of 24, the function should return the following URL string:
   *
   * https://www.countryflags.io/CA/flat/24.png
   *
   * For sizes, you should support 16, 24, 32, 48, and 64, and throw an error
   * if a different size is given.
   *
   * @param {String} countryCode - the country code, for example "CA"
   * @param {Size} size - the size of the flag to use
   */
  countryCodeToFlagUrl: function (countryCode, size) {
    let url = 'https://www.countryflags.io/';

    if (size === 16 || size === 24 || size === 32 || size === 48 || size === 64) {
      url += countryCode + '/flat/' + size + '.png';
    } else {
      throw new Error('Not a supported size');
    }
    return url;
  },

  /**
   * Takes a `country.code` (e.g., "CA" for Canada) and returns an <img> element,
   * using the ui.countryCodeToFlagUrl function to generate the img src attribute.
   *
   * @param {String} countryCode - the country code, for example "CA"
   */
  countryCodeToImg: function (countryCode) {
    let img = document.createElement('img');
    img.setAttribute('src', ui.countryCodeToFlagUrl(countryCode, 32));
    return img;
  },

  /**
   * Takes a single `country` object and converts it to a <tr> with <td>
   * child elements for every column in the row.  The row should match the
   * expected format of the table (i.e., flag, code, country, continent, etc).
   * Return the newly created  <tr>...</tr> row element.
   *
   * Use the DOM methods document.createElement(), element.appendChild(), etc
   * to create your <tr> row.
   *
   * Use `ui.countryCodeToImg` to generate the <img> element for the flag.
   *
   * Use `ui.addLangToElement` to decorate the country column in your row so that
   * its `lang` attribute is correct for the given language.
   *
   * @param {Object} country - the country object to format as a table row
   */
  countryToRow: function (country, language) {
    // let tableBody = document.getElementById('table-rows');
    // let rowTable = tableBody.insertRow(-1);
    // let couflag = rowTable.insertCell(0);
    // couflag.appendChild(ui.countryCodeToImg(country.code));
    // let couCode = rowTable.insertCell(1);
    // couCode.innerHTML = country.code;
    // let couName = rowTable.insertCell(2);
    // couName.appendChild(ui.addLangToElement('td', language));
    // let couContinent = rowTable.insertCell(3);
    // couContinent.innerHTML = country.continent;
    // let couArea = rowTable.insertCell(4);
    // couArea.appendChild(util.formatNumberForLanguage(country.areaInKm2, language));
    // let couPopulation = rowTable.insertCell(5);
    // couPopulation.appendChild(util.formatNumberForLanguage(country.population, language));
    // let couCapital = rowTable.insertCell(6);
    // couCapital.innerHTML = country.capital;
    ///////////////////////////////////////////////////////////////////////////////////
    let row = document.createElement('tr');
    let couflag = document.createElement('td');
    let couCode = document.createElement('td');
    let couName = document.createElement('td');
    let couContinent = document.createElement('td');
    let couArea = document.createElement('td');
    let couPopulation = document.createElement('td');
    let couCapital = document.createElement('td');

    let img = ui.countryCodeToImg(country.code);
    couflag.appendChild(img);

    couCode.innerHTML = country.code;

    ui.addLangToElement(couName, language);
    let newCOU = util.countryForLanguage(country, language);
    couName.innerHTML = newCOU.name;

    couContinent.innerHTML = country.continent;
    couArea.innerHTML = util.formatNumberForLanguage(country.areaInKm2, language);
    couPopulation.innerHTML = util.formatNumberForLanguage(country.population, language);
    couCapital.innerHTML = country.capital;
    row.appendChild(couflag);
    row.appendChild(couCode);
    row.appendChild(couName);
    row.appendChild(couContinent);
    row.appendChild(couArea);
    row.appendChild(couPopulation);
    row.appendChild(couCapital);
    return row;
  },

  /**
   * Takes an array of `country` Objects named `countries`, and passes each
   * `country` in the array  to `ui.countryToRow`.  The resulting
   * rows are then appended to the #table-rows table body element.  Make sure
   * you use `ui.clearTable()` to remove any existing rows before you do this.
   *
   * Also make sure to pass the `language` value into `ui.countryToRow` so that
   * the country names in the table get the appropriate `lang` attribute set.
   *
   * @param {Array<Object>} countries - the country objects to be turned into rows in a table
   * @param {String} language - the language name being used for these countries
   */
  countriesToTable: function (countries, language) {
    ui.clearTable();
    let couNo = new Array();
    let table = document.getElementById('table-rows');
    for (let i = 0; i < countries.length; i++) {
      couNo = ui.countryToRow(countries[i], language);
      table.appendChild(couNo);
    }
  }
};
