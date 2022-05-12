`use strict`;

(function () {
  const API = `https://swapi.dev/api/`;
  const TEXT_FOR_SEARCH = '/?search=';
  const $contentElem = document.querySelector(`.js-content`);
  const $searchBlockElem = $contentElem.querySelector(`.js-search_block`);
  const $formElem = $searchBlockElem.querySelector(`.js-search_form`);
  const $selectElem = $formElem.querySelector(`.js-select_search`);
  const $inputElem = $formElem.querySelector(`.js-input_search`);

  window.start = function () {
    $formElem.addEventListener(`submit`, function(event) {
      event.preventDefault();
      const CURRENT_SELECT_VALUE = $selectElem.value;
      const url = API + $selectElem.value + TEXT_FOR_SEARCH + $inputElem.value;
      
      window.requestFetch(url).then( response => window.displayResultsList(response, $contentElem) )

      $formElem.reset();
      $selectElem.value = CURRENT_SELECT_VALUE;
    });

    $searchBlockElem.addEventListener(`click`, function(event) {
      if ( event.target.className.includes(`js-item`) ) {
        const url = API + $selectElem.value + TEXT_FOR_SEARCH + event.target.textContent;  
        
        window.requestFetch(url).then( response => window.displayResultDetails(response, $contentElem) )
      }
    });
  };
})();
