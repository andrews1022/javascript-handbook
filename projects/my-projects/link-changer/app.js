// --------------------------------- LINK CHANGER ---------------------------------
// Update href values as per function call - works for single and multi cases
function updateATag(originalLink, newLink) {
  // Get all anchor tags
  const links = document.querySelectorAll('a');

  // For each link in the array
  links.forEach((item) => {
    const linkItem = item;

    // Grab the href value
    let hrefValue = linkItem.getAttribute('href');

    // If the href value equals the passed in value for originalLink
    if (hrefValue === originalLink) {
      // Set the attribute to the value passed in for newLink
      hrefValue = linkItem.setAttribute('href', `${newLink}`);

      // Change text content as well for fun
      linkItem.textContent = 'HREF VALUE CHANGED! :O';
    }
  });
}
// Calling the function - change first link to see the effect take place
updateATag('https://www.reddit.com/', 'https://www.w3schools.com/');
