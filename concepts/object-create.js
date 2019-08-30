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
book1.title = 'Book One';
book1.author = 'Andrew Shearer';
book1.year = '2013';


// Example #2
const book2 = Object.create(bookProtos, {
  title: { value: 'Book One' },
  author: { value: 'Andrew Shearer' },
  year: { value: '2013' }
});

console.log(book1);
console.log(book2);