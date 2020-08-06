function updateLinks(originalLink, newLink) {
  const links = document.querySelectorAll('a');

  links.forEach((link) => {
    let hrefValue = link.getAttribute('href');

    if (hrefValue === originalLink) {
      hrefValue = link.setAttribute('href', newLink);
      link.textContent = 'The href value has been changed!';
    }
  });
}

updateLinks('https://www.google.com/', 'https://www.w3schools.com/');
