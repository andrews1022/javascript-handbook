// Hard Coded/Fake/Pretend API data
const profileData = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'New York NY',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

// Profile Iterator Function
function profileIterator(profilesPassedIn) {
  // Counter variable
  let nextIndex = 0;

  return {
    next() {
      return nextIndex < profilesPassedIn.length ? 
        { value: profilesPassedIn[nextIndex++], done: false } : 
        { done: true };
    }
  };
}

// Pass in the profileData array above to the profile iterator
const profilesToDisplay = profileIterator(profileData);

// Next Profile Display
function nextProfile() {
  // Iterate profiles.next().value
  const currentProfile = profilesToDisplay.next().value;

  if (currentProfile !== undefined) {
    // Display profile data in the DOM
    document.querySelector('#profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    // Display profile image
    document.querySelector('#imageDisplay').innerHTML = `
      <img src="${currentProfile.image}"></img>
    `;
  } else {
    // No profiles remaing (at the end of the array) > reload the page
    window.location.reload();
  }
}

// Call first profile for initial page load
nextProfile();

// Event Listener for next profile button
document.getElementById('next').addEventListener('click', nextProfile);


// ---------- Steps: ----------
// 1) Create data to be inserted (array, or getting from API)
// 2) Create iterator function
// 3) Created a variable called profiles, set it to the iterator passing the in array
// 4) Created function to display the profile data
// 5) Called function for intial page load to load first profile
// 6) Added event listener to the button to load next profile on click
