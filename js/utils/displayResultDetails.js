`use strict`;

(function () {
	window.displayResultDetails = function(resultOfSearch, elementIntoWhichToInsert){
		const $templateElem = elementIntoWhichToInsert.querySelector(`.js-template`);
		const templateClone = $templateElem.content.cloneNode(true);
		const $nameElem = templateClone.querySelector(`.js-cell_for_name`);
		const $heightElem = templateClone.querySelector(`.js-cell_for_height`);
		const $massElem = templateClone.querySelector(`.js-cell_for_mass`);
		const $birthYearElem = templateClone.querySelector(`.js-cell_for_birth_year`);
		const $filmsCountElem = templateClone.querySelector(`.js-cell_for_films_count`);

		$nameElem.textContent = resultOfSearch[0].name;
		$heightElem.textContent = resultOfSearch[0].height;
		$massElem.textContent = resultOfSearch[0].mass;
		$birthYearElem.textContent = resultOfSearch[0].birth_year;
		$filmsCountElem.textContent = resultOfSearch[0].films.length;

		if (elementIntoWhichToInsert.lastElementChild.className.includes('js-table')) {
			return elementIntoWhichToInsert.lastElementChild.replaceWith(templateClone);
		}
		elementIntoWhichToInsert.append(templateClone);
	}
})();
