// Create a function called biggestNumberInArray() that takes arr as a parameter and returns the biggest number.
const array = [-1, 0, 3, 100, 99, 2, 99] // should return 100

// The function
function biggestNumberInArray(arr) {
    let highest = 0;
    for (item of arr) {
        if (highest < item) {
            highest = item;
        }
    }
    return highest;
}