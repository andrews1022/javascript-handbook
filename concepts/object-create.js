// Object Of Protos
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written ${this.author} in ${this.year}`;
  },
  
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
}

// Example #1
// Create the object
const book1 = Object.create(bookProtos);

// Add properties
book1.title = 'War and Peace';
book1.author = 'Leo Tolstoy';
book1.year = '1869';


// Example #2
const book2 = Object.create(bookProtos, {
  title: { value: 'Hamlet' },
  author: { value: 'William Shakespeare' },
  year: { value: '1600' }
});

console.log(book1);
console.log(book2);