class Copyier {
  constructor() {
    // Set UI Variables
    this.formChecks = document.querySelectorAll('.form__check');
    this.classInput = document.querySelector('#classInput');
    this.bothInput = document.querySelector('#bothInput');
    this.classGenBtn = document.querySelector('#classGenBtn');
    this.bothGenBtn = document.querySelector('#bothGenBtn');
    this.classEntry = document.querySelector('#classEntry');
    this.bothClassEntry = document.querySelector('#bothClassEntry');
    this.bothElementEntry = document.querySelector('#bothElementEntry');
    this.classOutput = document.querySelector('#classOutput');
    this.bothOutput = document.querySelector('#bothOutput');
  }

  // Display/hide input fields
  displayInput(input) {
    if (input.classList.contains('hide')) {
      input.classList.remove('hide');
      input.classList.add('show');
    } else {
      input.classList.remove('show');
      input.classList.add('hide');
    }
  }

  // Confirming which check is clicked
  checkToggle() {
    this.formChecks.forEach((check) => {
      check.addEventListener('click', () => {
        if (check.id === 'classOnlyCheck') {
          this.displayInput(this.classInput);
        } else if (check.id === 'bothCheck') {
          this.displayInput(this.bothInput);
        }
      })
    })
  }

  // Create the elements for each class value entered
  createClassOnlyOutput() {
    const classArray = this.classEntry.value.split(', ');

    // For element in this array, create an element
    classArray.forEach((cls) => {
      const listItem = document.createElement('li');

      listItem.innerHTML = `
        <li class="form__list-item">
          <code class="form__code">class="${cls}"</code>
          <div class="form__list-item__inner">
            <button class="btn btn--copy">Copy</button>
            <button class="btn btn--del">Delete</button>
          </div>
        </li> 
      `;

      // Then append the elements to the ul output
      classOutput.appendChild(listItem);
    });
  }

  // Validate class input
  checkClassOnlyInput() {
    if (this.classEntry.value === '') {
      alert('Please check your input.');
    } else {
      this.createClassOnlyOutput();
    }
  }

  // Create elements with classes for each class and element entered
  createBothOutput() {
    // Split values from both inputs into arrays
    const bothClassArray = this.bothClassEntry.value.split(', ');
    const bothElementArray = this.bothElementEntry.value.split(', ');

    // Combined the above two arrays into a mapped array like so:
    // Starts with each element, followed by an array of all the class names entered
    const combined = bothElementArray.map((el) => {
      return [el, bothClassArray];
    });

    // For each combined array...
    combined.forEach((arr) => {
      const classesArray = arr[0]; // Assign all class names entered
      const elementsArray = arr[1]; // Assign all elements entered

      // Create a results array, taking each element, and creating an array with it with each class name
      const results = elementsArray.map((el) => {
        return [el, classesArray];
      });

      // For each pair...
      results.forEach((res) => {
        // Create a list item
        const listItem = document.createElement('li');

        // Insert html with the pair array values
        listItem.innerHTML = `
          <li class="form__list-item">
            <code class="form__code">&lt;${res[1]} class="${res[0]}"&gt;&lt;/${res[1]}&gt;</code>
            <div class="form__list-item__inner">
              <button class="btn btn--copy">Copy</button>
              <button class="btn btn--del">Delete</button>
            </div>
          </li>
        `;

        // Then append the elements to the ul output
        bothOutput.appendChild(listItem);
      });
    });
  }

  // Check if both inputs having something in them
  checkBothInput() {
    if (this.bothClassEntry.value === '' || this.bothElementEntry.value === '') {
      alert('Please check your input.');
    } else {
      this.createBothOutput();
    }
  }

  // Copy text & delete list item function
  async copyAndDelete(e) {
    if (e.target.classList.contains('btn--copy')) {
      if (navigator.clipboard) {
        e.preventDefault();

        const classText = e.target.parentElement.parentElement.children[0].textContent;

        try {
          await navigator.clipboard.writeText(classText);

          e.target.textContent = 'Copied!';

          setTimeout(() => {
            e.target.textContent = 'Copy';
          }, 1500);
        } catch (err) {
          console.error('Failed to copy!', err);
        }
      }
    } else if (e.target.classList.contains('btn--del')) {
      e.preventDefault();

      e.target.parentElement.parentElement.remove();
    }
  }

  // Create event listeners
  eventListeners() {
    // Generate classes only button listener
    this.classGenBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default behaviour (prevent refreshing page)
      this.checkClassOnlyInput(); // Run input check, which runs creating elements if valid
    });

    // Generate both button listener
    this.bothGenBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default behaviour (prevent refreshing page)
      this.checkBothInput(); // Run input check, which runs creating elements if valid
    });

    // Event listeners for clicking copy/delete buttons on either output
    this.classOutput.addEventListener('click', this.copyAndDelete);
    this.bothOutput.addEventListener('click', this.copyAndDelete);
  }

  // Initialization function
  init() {
    this.eventListeners();
    this.checkToggle();
  }
}

const copy = new Copyier();

copy.init();
