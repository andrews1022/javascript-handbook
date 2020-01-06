// The state pattern is another behavioral type pattern
// It sort of how state managers like Redux work
// We have a state that we can change it throughout our script so if we want to do certain things on certain states or display certain content we can do that

const PageState = function() {
  let currentState = new homeState(this); // this pertains to the function itself

  // Init method - set initial page to home state
  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
}

// Home state
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  `;
}

// About State
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `<p>This is the about page</p>`;
}

// Contact State
const contactState = function(page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>Email address</label>
      <input type="email" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;
}

// Instantiate page state
const page = new PageState();

// Init the first state
page.init();

// UI Variables
const home = document.querySelector('#home'),
      about = document.querySelector('#about'),
      conact = document.querySelector('#conact');

// Home event listener
home.addEventListener('click', (e) => {
  e.preventDefault();
  
  page.change(new homeState);
})

// About event listener
about.addEventListener('click', (e) => {
  e.preventDefault();

  page.change(new aboutState);
})

// Contact event listener
contact.addEventListener('click', (e) => {
  e.preventDefault();

  page.change(new contactState);
})