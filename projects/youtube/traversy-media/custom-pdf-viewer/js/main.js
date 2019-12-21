// Set a variable to wherever the document
// In our case it's in the docs folder
// This could be a remote document as well
const url = '../docs/sample.pdf';

// Other variables will be let because they will be reassigned later on
let pdfDocument = null; // this will be document that we get with pdf.js
let pageNum = 1; // start on the first page
let pageIsRendering = false; // when we run our render page method, this will be set to true
let pageNumIsPending = null; // if we're fetching other/multiple pages

// Essentially, we are fetching the pdf and put it in this canvas
let scale = 1; // feel free to change this scale value
const canvas = document.querySelector('#pdf-render');
const context = canvas.getContext('2d');

// Render the page function
const renderPage = num => {
  pageIsRendering = true;

  // Get the page
  pdfDocument.getPage(num).then(page => {
    // Set the scale
    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport
    };

    page.render(renderContext).promise.then(() => {
      pageIsRendering = false;

      if (pageNumIsPending !== null) {
        renderPage(pageNumIsPending);
        pageNumIsPending = null;
      }
    });

    // Output current page
    document.querySelector('#page-num').textContent = num;
  });
};

// Check for pages rendering
const queueRenderPage = num => {
  if (pageIsRendering) {
    pageNumIsPending = num;
  } else {
    renderPage(num);
  }
};

// Show Prev Page
const showPrevPage = () => {
  if (pageNum <= 1) {
    return;
  }
  pageNum -= 1;
  queueRenderPage(pageNum);
};

// Show Next Page
const showNextPage = () => {
  if (pageNum >= pdfDocument.numPages) {
    return;
  }
  pageNum += 1;
  queueRenderPage(pageNum);
};

// Get Document
pdfjsLib
  .getDocument(url)
  .promise.then(pdfDoc_ => {
    pdfDocument = pdfDoc_;

    document.querySelector('#page-count').textContent = pdfDocument.numPages;

    renderPage(pageNum);
  })
  .catch(err => {
    // Display error
    // Create the element and assign class name
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message)); // whatever is wrong will go in as the message
    document.querySelector('body').insertBefore(div, canvas);

    // Remove top bar
    document.querySelector('.top-bar').style.display = 'none';
  });

// Zoom in function
const zoomIn = () => {
  scale += 0.25;
  queueRenderPage(pageNum);
  // console.log(scale);
};

// Zoom out function
const zoomOut = () => {
  if (scale <= 0.25) {
    return;
  }
  scale -= 0.25;
  queueRenderPage(pageNum);
};

// Zoom reset function
const zoomReset = () => {
  if (scale !== 1) {
    scale = 1;
    queueRenderPage(pageNum);
  }
};

// Button events
document.querySelector('#prev-page').addEventListener('click', showPrevPage);
document.querySelector('#next-page').addEventListener('click', showNextPage);
document.querySelector('#zoom-in').addEventListener('click', zoomIn);
document.querySelector('#zoom-out').addEventListener('click', zoomOut);
document.querySelector('#zoom-reset').addEventListener('click', zoomReset);
