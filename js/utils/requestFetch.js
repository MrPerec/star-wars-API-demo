`use strict`;

(function () {
	window.requestFetch = function (urlArgument){
		const SUCCESSFUL_HTTP_CODE = 200;
  	const NO_RESULT = 0;

    return fetch(urlArgument)
      .then( function(response) {
        if (response.status !== SUCCESSFUL_HTTP_CODE) return alert(`Произошла ошибка при получении ответа от сервера:
          ${response.message}`);
        return response.json();
    }).then( function(response) {
        if (response.count == NO_RESULT) return alert(`Ничего не найдено, попробуйте еще раз!`);
        return response.results;
      })
	}
})();
