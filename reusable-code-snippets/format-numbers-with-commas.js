let num = 186774.645591;

// Round num to 2 decimal places and convert to a string with toFixed(2)
num = num.toFixed(2); // "186774.65"

// Next, convert, & place a $ at the front (or whatever currency symbol you wish)
num = `$${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`; // "$186,774.65"

console.log(num);



var type;
    let sign;

    /* 
    Rules:
    1) Insert a + or a - before the number, depending on the type
    2) Exactly 2 decimal points
    3) Insert a comma for each thousand
    */

    // The first thing that we want to do is to calculate the absolute part of the number,
    // This means that, for example, if it's minus 2000 (-2000), that it should simply be 2000
    num = Math.abs(num); // We can use Math.abs() for this, which removes any sign infront of the number. abs stands for absolute
    // We also use the num we pass in as an argument, and as the variable

    // Next, we take care of the number of decimals
    num = num.toFixed(2); // This is a method for the Number prototype. JavaScript will automatically converts this primitive to an object
    // Worth noting though, this returns a string

    // Comma separating the thousands
    // Split the number from the integer and decimal parts
    const numSplit = num.split('.');
    let int = numSplit[0];
    const dec = numSplit[1];

    // Adding the commas
    if (int.length > 3) {
      // We can use a method call substring, shortened to substr
      // Subtring allows us to take part of a string
      // The first argument is the index number of where we want to start
      // The second argument is how many characters we want
      int = `${int.substr(0, int.length - 3)},${int.substr(int.length - 3, 3)}`;
    }

    // Execute a ternary expression
    return `${type === 'exp' ? (sign = '-') : (sign = '+')} $${int}.${dec}`;