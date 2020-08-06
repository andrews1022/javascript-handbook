// Here's our object
let obj = {
  username0: 'Santa',
  username1: 'Rudolph',
  username2: 'Mr. Grinch',
};

// .keys example
// After (obj).  we can do things like we could for an array
Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
});
