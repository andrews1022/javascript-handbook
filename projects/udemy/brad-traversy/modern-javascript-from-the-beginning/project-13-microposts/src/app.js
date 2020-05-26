import {
  http
} from './http';
import {
  ui
} from './ui';

// Get posts
function getPosts() {
  // Get posts from fake rest api running on json-server
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(error => console.log(error));
}

// Add posts
function submitPost() {
  // GOAL = get the values from the form and use our HTTP module and make a post request

  // Get form data
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  // Create an object literal with above values
  const data = {
    title,
    body
  }

  // Validate input - make sure inputs have something entered
  if (title === '' || body === '') {
    ui.showAlert('Please fill in the form', 'alert alert-danger')
  } else {
    // Check form ID
    if (id === '') {
      // Add/create post
      // Make post request - Create post
      http.post('http://localhost:3000/posts', data)
        .then(data => {
          ui.showAlert('Post Added!', 'alert alert-success');
          ui.clearFields();
          // Once we add the post, we want to see it added on the page, so we need to call getPosts() again
          // This will get the posts including the new one we just added
          getPosts();
        })
        .catch(error => console.log(error))
    } else {
      // Update the post - PUT request
      http.put(`http://localhost:3000/posts/${id}`, data)
        .then(data => {
          ui.showAlert('Post Updated!', 'alert alert-success');
          ui.changeFormState('add');
          getPosts();
        })
        .catch(error => console.log(error))
    }
  }
}

// Delete post
function deletePost(e) {
  e.preventDefault();

  // Check if class contains class of delete
  if (e.target.parentElement.classList.contains('delete')) {
    // This is from the data-id attribute we create in the ui module
    const id = e.target.parentElement.dataset.id;

    // Confirm that they want to delete the post
    if (confirm('Are you sure?')) {
      // If they are, we will make our request using our http.delete method
      // Delete the post with the matching id#
      http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          // Show an alert message
          ui.showAlert('Post Removed', 'alert alert-success');

          // Get posts
          getPosts();
        })
        .catch(error => console.log(error));

    }
  }
}

// Enable edit state function
function enableEdit(e) {
  e.preventDefault();

  if (e.target.parentElement.classList.contains('edit')) {
    // Get the id, title and body
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    // Put the id, title, body variables above into a data variable below
    const data = {
      id,
      title,
      body
    }

    // Fill the form with the current post using data variable
    ui.fillForm(data)
  }
}

// Cancel form edit
function cancelEdit(e) {
  e.preventDefault();

  // Change state back to edit mode
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }
}

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add posts
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete posts
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

// Listen for click on cancel button
document.querySelector('.card-form').addEventListener('click', cancelEdit);