// If you need to check if an element does NOT exist, do so like this:
var myElement = document.querySelectorAll('#myElementsID');

if (myElement === null) {
  console.log('This element does not exist!');
}

// Or simply:
if (!myElement) {
  console.log('This element does not exist!');
}