var array1 = [1, 2, 3, 4];
var array2 = [5, 6, 7, 8];

var sum = array1.map((num, idx) => {
  return num + array2[idx];
}); // [6,8,10,12]