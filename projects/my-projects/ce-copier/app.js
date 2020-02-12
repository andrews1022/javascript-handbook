// ---------- UI Variables ----------
const initialChecks = document.querySelectorAll('.initial-check');
const classInput = document.querySelector('#classInput');
const elementInput = document.querySelector('#elementInput');
const generateBtns = document.querySelectorAll('.btn--generate');
const classEntry = document.querySelector('#classEntry');
const bothClassEntry = document.querySelector('#bothClassEntry');
const bothElementEntry = document.querySelector('#bothElementEntry');
const classOutput = document.querySelector('#classOutput');
const elementOutput = document.querySelector('#elementOutput');

// Function to display/hide inputs
function displayInput(el) {
  if (el.style.display === '') {
    el.style.display = 'block';
  } else if (el.style.display === 'none') {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}

// Handle which check box is clicked
initialChecks.forEach((check) => {
  check.addEventListener('click', () => {
    if (check.id === 'classCheck') {
      displayInput(classInput);
    } else if (check.id === 'elementCheck') {
      displayInput(elementInput);
    } else {
      console.log('Something went wrong here...');
    }
  });
});

// Handle output
generateBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (btn.id === 'classGenerator') {
      if (classEntry.value === '' || classEntry.value === null || classEntry.value === undefined) {
        alert('Please check your input.');
      } else {
        // Otherwise, split each value into array separated by (', ') and save into an array
        const classArray = classEntry.value.split(', ');

        // For element in this array, create an element
        classArray.forEach((cls) => {
          const listItem = document.createElement('li');

          listItem.innerHTML = `
            <li class="list-item">
              <code>class="${cls}"</code>
              <button class="btn btn--copy">Copy</button>
              <button class="btn btn--del">Delete</button>
            </li>
          `;

          // Then append the elements to the ul output
          classOutput.appendChild(listItem);
        });
      }
    } else if (btn.id === 'elementGenerator') {
      // If either field is empty
      if (bothClassEntry.value === '' || bothClassEntry.value === null || bothClassEntry.value === undefined ||
        bothElementEntry.value === '' || bothElementEntry.value === null || bothElementEntry.value === undefined) {
        alert('Please check your input.');
      } else {
        // Split values from both inputs into arrays
        const bothClassArray = bothClassEntry.value.split(', ');
        const bothElementArray = bothElementEntry.value.split(', ');

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
              <li class="list-item">
                <code>&lt;${res[1]} class="${res[0]}"&gt;&lt;/${res[1]}&gt;</code>
                <button class="btn btn--copy">Copy</button>
                <button class="btn btn--del">Delete</button>
              </li>
            `;

            // Then append the elements to the ul output
            elementOutput.appendChild(listItem);
          });
        });
      }
    } else {
      console.log('Something went wrong here');
    }
  });
});

// Copy text & delete list item function
async function copyAndDelete(e) {
  if (e.target.classList.contains('btn--copy')) {
    if (navigator.clipboard) {
      const classText = e.target.previousElementSibling.textContent;

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
    e.target.parentElement.remove();
  } else {
    console.log('Something went wrong here...');
  }
}

// Listen for click on edit
classOutput.addEventListener('click', copyAndDelete);
elementOutput.addEventListener('click', copyAndDelete);
