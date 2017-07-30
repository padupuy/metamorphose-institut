/*
  Automatically instantiates modules based on data-attributes
  specifying module file-names.
*/

const moduleElements = document.querySelectorAll('[data-module]');

moduleElements.forEach(el => {
  const name = el.getAttribute('data-module');
  const Module = require(`./${name}`).default;

  new Module(el);
});
