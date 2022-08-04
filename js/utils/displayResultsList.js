`use strict`;

(function () {
	window.displayResultsList = function(resultOfSearch, elementIntoWhichToInsert){
		const $listResultElem = window.createNewElem(`ul`, {class:`search_result js-search_result`});

		for (let elem of resultOfSearch) {
		$listResultElem.append( window.createNewElem(`li`, {class:`item js-item`}, elem.name) )
		}
		if (elementIntoWhichToInsert.firstElementChild.lastElementChild.className.includes('js-search_result')) {
			return elementIntoWhichToInsert.firstElementChild.lastElementChild.replaceWith($listResultElem);
		}
		elementIntoWhichToInsert.firstElementChild.append($listResultElem);
	}
})();
