// Generators are functions that can be paused and can return multiple values, also known as yield values

// ---------- EXAMPLE #1 ----------
// The use of the * symbol tells JavaScript this is a generator
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next());

// ---------- EXAMPLE #2 ----------
// ID Creator
function* createIDs() {
  let index = 1;

  while (true) {
    yield index++;
  }
}

const gen = createIDs();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
// Will keep generating id numbers - will always increase and never end
