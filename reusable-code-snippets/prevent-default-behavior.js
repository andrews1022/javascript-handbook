// If are working with an <a> tag, or a submit button, but don't want to it to link/submit, use one or both of these:
const link = document.querySelector('#myLink');

link.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  e.preventDefault(); // Usally preventDefault is enough, but sometimes you might need both
});
