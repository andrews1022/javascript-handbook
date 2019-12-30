// Instantiate GH Class
const github = new GitHub;
// Instantiate UI Class
const ui = new UI;

// Search input variable
const searchUser = document.querySelector('#searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (event) => {
  // Get the text that is being typed in
  const userText = event.target.value;

  // Make sure input is not blank
  if (userText !== '') {
    // Make HTTP Call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert saying user is not found
          ui.showAlert('User not found', 'alert alert-danger mt-3');
        } else {
          // Show profile otherwise
          ui.showProfile(data.profile);
          // Show repos
          ui.showRepos(data.repos);
        }
      })
  } else {
    // Clear profile
    ui.clearProfile();
  }
})