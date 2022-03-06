// Let's say we want to load in the Font Awesome CSS link from CDNJS

const cssId = 'myCss';
if (!document.getElementById(cssId)) {
  const head = document.getElementsByTagName('head')[0];
  const link = document.createElement('link');
  link.id = cssId;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css';
  link.media = 'all';
  head.appendChild(link);
}
