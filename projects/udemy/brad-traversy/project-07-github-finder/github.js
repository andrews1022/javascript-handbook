// GitHub Class is reponsible for fetching data from the API
class GitHub {
  constructor() {
    this.client_id = 'e9c1c6bc17386c11899b';
    this.client_secret = 'd3d5d92b82c2b2e8f1a3217f36bf86dc25376944';
    this.repos_count = 5; // Set maximum number of repos to display
    this.repos_sort = 'created: asc'; // Set sorting of repos from newest to oldest
  }

  // Get user method
  async getUser(user) {
    // Response for the profile
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // Response for the repos
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,  // Same as saying profile: profile --> no need for repetition
      repos
    }
  }
}