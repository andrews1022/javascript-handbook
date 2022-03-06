// Complete the below questions using this array:
const array = [
  { username: 'John', team: 'red', score: 5, items: ['ball', 'book', 'pen'] },
  {
    username: 'Becky',
    team: 'blue',
    score: 10,
    items: ['tape', 'backpack', 'pen']
  },
  {
    username: 'Susy',
    team: 'red',
    score: 55,
    items: ['ball', 'eraser', 'pen']
  },
  { username: 'Tyson', team: 'green', score: 1, items: ['book', 'pen'] }
];

// Create an array using forEach that has all the usernames
let nameArray = [];
array.forEach(function (user) {
  let { username } = user;
  nameArray.push(username);
});
console.log('forEach array names', nameArray);

// Create an array using forEach that has all the usernames with a "!" to each of the usernames
let nameArrayExclamation = [];
array.forEach((user) => {
  let { username } = user;
  username = username + '!';
  nameArrayExclamation.push(username);
});
console.log('forEach array names with exclamation', nameArrayExclamation);
