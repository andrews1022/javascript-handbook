// Consider this array, with team players and their average score over the last 3 games
const averageScoreArray = [
  [104, 'John'],
  [111, 'Mike'],
  [116, 'Mary'],
];

// To return the array with the highest average score, and it's player, we use reduce:
const winingPair = averageScoreArray.reduce((max, arr) => {
  return max[0] >= arr[0] ? max : arr;
});

console.log(`The highest average score was ${winingPair[0]}, which was done by ${winingPair[1]}'s team.`);