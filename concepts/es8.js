// -------------------------------------- STRING PADDING --------------------------------------
// ES8 introduced 2 string padding methods
.padStart();
.padEnd();

// For example:
'Turtle'.padStart(10);
"    Turtle"
// We get 10 "total" characters/spaces used including the string

'Turtle'.padEnd(10);
"Turtle    "


// -------------------------------------- TRAILING COMMAS --------------------------------------
const fun = (a,b,c,d,) => {
    console.log(a);
}

fun(1,2,3,4,);

// The main reason for knowing this is  when you start getting really, really big parameter lists, you'll see a lot of people doing things similar to this:
const funTrailing = (
                    a,
                    b,
                    c,
                    d,
                    e,
                    ) => {
                        console.log(a);
}
// Also makes reading any changes in GitHub easier to read


// -------------------------------------- Object --------------------------------------
Object.values
Object.entries
Object.keys

// Here's our object
let obj = {
    username0: 'Santa',
    username1: 'Rudolph',
    username2: 'Mr. Grinch'
}

// .keys example
// After (obj).  we can do things like we could for an array
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

// .values example
Object.values(obj).forEach(value => {
    console.log(value);
})

// .entries example
Object.entries(obj).forEach(value => {
    console.log(value);
})

// Replace username with empty string
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})