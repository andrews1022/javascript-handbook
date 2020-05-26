class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add'; // Default state is add
  }

  // Sow all posts in the UI
  showPosts(posts) {
    // Set initial variable for output
    let output = '';

    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fas fa-edit"></i>
            </a>
            <a href="#" class="delete card-link" data-id="${post.id}">
              <i class="fas fa-trash"></i>
            </a>
          </div>
        </div>
      `;
    });

    this.post.innerHTML = output;
  }

  // Show alert message
  showAlert(message, className) {
    // First clear the alert
    this.clearAlert();

    // Create div
    const div = document.createElement('div');

    // Add classes
    div.className = className;

    // Add text
    div.appendChild(document.createTextNode(message));

    // Get the parent
    const container = document.querySelector('.postsContainer');

    // Get posts div
    const posts = document.querySelector('#posts');

    // Insert the alert div
    container.insertBefore(div, posts);

    // Have alert message go away after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  // Clear alert message
  clearAlert() {
    // Select the element with class alert
    const currentAlert = document.querySelector('.alert');

    // Test if there is a currentAlert, remove it
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear input fields
  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  // Fill form to edit
  fillForm(data) {
    // Put the fields in the form
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  // Clear ID Hidden Value
  clearIdInput() {
    this.idInput.value = '';
  }

  // Change the form state
  changeFormState(type) {
    if (type === 'edit') {
      // Change button text and color if edit
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn btn-warning btn-block';

      // Create a cancel button below
      const button = document.createElement('button');

      // Add classes
      button.className = 'post-cancel btn btn-light btn-block';

      // Add text
      button.appendChild(document.createTextNode('Cancel Edit'));

      // Get parent element - which is the card form
      const cardForm = document.querySelector('.card-form');

      // Get element to insert before (span element - form-end)
      const formEnd = document.querySelector('.form-end')

      // Insert cancel button
      cardForm.insertBefore(button, formEnd);
    } else {
      // Else, type should be add (will always be add otherwise)
      // Change button text and color back
      this.postSubmit.textContent = 'Post It';
      this.postSubmit.className = 'post-submit btn btn-primary btn-block';

      // Remove cancel button if there
      if (document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }

      // Clear the id from the hidden field
      this.clearIdInput();

      // Clear text fields
      this.clearFields();
    }
  }
}

export const ui = new UI();