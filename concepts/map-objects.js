// A map is an object that holds key value pairs and any value whether it's an object, an object reference type, or a primitive can be used as a key or value which is very different than just an object literal 
// We can actually use an object as a key

// MAPS = Key-value pairs and we can use ANY type as a key or a value
const map1 = new Map(); // use new Map()

// Set custom keys
const key1 = 'Some string';
const key2 = {};
const key3 = function(){};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

// Count the values inside the map
console.log(map1.size);

// Iterating through maps
// Use the for...of loop to get the key and the value
for(let [key,value] of map1){
  console.log(`Keys and values: ${key} = ${value}`);
}

// Get just the keys only
for(let key of map1.keys()){
  console.log(`Keys only: ${key}`);
}

// Get the values only
for(let value of map1.values()){
  console.log(`Values only: ${value}`);
}

// Can also use forEach
map1.forEach((value, key)=> {
  console.log(`Keys and values forEach: ${key} = ${value}`);
})

// ----- Convert maps to arrays -----
// Create an array of the key value pairs
const keyAndValueArray = Array.from(map1);
console.log('Keys and values from Array:', keyAndValueArray);

// Create an array of the values only
const valueArray = Array.from(map1.values());
console.log('Values from Array:', valueArray);

// Create an array of the keys only
const keyArray = Array.from(map1.keys());
console.log('Values from Array:', keyArray);
