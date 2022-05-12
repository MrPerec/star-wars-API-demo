`use strict`;

(function () {
  window.createNewElem = function (name, attributes, text) {
    const el = document.createElement(name);
    if (typeof attributes == 'object' ) {
      for ( let i in attributes ) el.setAttribute(i, attributes[i]);
    }
    el.textContent = text;
    return el;
  }
})();
