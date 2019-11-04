// Housekeeper object
function HouseKeeper(passedInYearsOfExperience, passedInName, passedInCleaningRepertoire) {
  this.yearsOfExperience = passedInYearsOfExperience;
  this.name = passedInName;
  this.cleaningRepertoire = passedInCleaningRepertoire;
}

// Creating a new housekeeper
var houseKeeper1 = new HouseKeeper(10, 'Jane', ['bedrooms', 'bathrooms', 'lobby']);