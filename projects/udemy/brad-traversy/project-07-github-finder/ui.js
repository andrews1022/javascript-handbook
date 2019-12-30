class UI {
  constructor() {
    // Grab the output div with id of 'profile'
    this.profile = document.querySelector('#profile');
  }

  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary m-1">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary m-1">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success m-1">Followers: ${user.followers}</span>
            <span class="badge badge-info m-1">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: 
                <a href="${user.blog}">${user.blog}</a>
              </li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show alert message
  showAlert(message, className){
    // Clear any remaining alerts
    this.clearAlert();

    // Create a div
    const div = document.createElement('div');

    // Add classes
    div.className = className;

    // Add the text
    div.appendChild(document.createTextNode(message));

    // Get parent
    const container = document.querySelector('.searchContainer');

    // Get the search box
    const search = document.querySelector('.search');

    // Insert the alert
    container.insertBefore(div, search);

    // Remove after 3 seconds
    setTimeout(() => {
      // Call the clearAlert method to remove from DOM
      this.clearAlert();
    }, 2500);
  }

  // Show user repos
  showRepos(repos){
    let output = '';

    // Loop through the repos
    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary m-1">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary m-1">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success m-1">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output the repos
    document.querySelector('#repos').innerHTML = output;
  }

  // Clear alert message
  clearAlert(){
    // Grab current alert message
    const currentAlert = document.querySelector('.alert');

    // Check to see if there is one
    if (currentAlert) {
     currentAlert.remove(); 
    }
  }

  // Clear profile on empty input
  clearProfile(){
    this.profile.innerHTML = '';
  }
}