// Budget Controller
const budgetController = (() => {
  // Expense function controller
  class Expense {
    constructor(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
      this.percentage = -1;
    }

    // Calculate percentage for each item against the total budget
    calculatePercentage(totalIncome) {
      totalIncome > 0 ? this.percentage = Math.round((this.value / totalIncome) * 100) : this.percentage = -1;
    }

    // Get expense percentage
    getPercentage() {
      return this.percentage;
    }
  }

  // Income function controller
  class Income {
    constructor(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    }
  }

  // Data structure which keeps track of all the incomes and expenses, the budget itself, and  percentages
  const data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0, // Total budget amount
    percentage: -1 // Percent of income spent
  };

  // Calculate total incomes or expense, passing in a type parameter to let us decide
  const calculateTotal = (type) => {
    let sum = 0;
    // loop over the array, and add each value to the sum variable
    data.allItems[type].forEach((currentType) => sum += currentType.value);

    // Store the sum inside the totals{} object, in the appropriate key
    data.totals[type] = sum;
  };

  // Here we will create a public method that will allow other modules to add a new item into our data structure
  return {
    // We need to know the type, the description, and the value
    addItem(type, des, val) {
      let newItem;
      let ID;

      // To avoid conflicting IDs numbers, we will make our ID#s equal to the LAST ID#, plus 1
      data.allItems[type].length > 0 ? ID = data.allItems[type][data.allItems[type].length - 1].id + 1 : ID = 0;
      // The second set of [], [data.allItems[type].length - 1], determines the number/index location of the last item

      // For the type parameter, the UIController has a getInput method which returns the type of the item, so we can check for that here
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      // Push the item onto the appropriate items array
      data.allItems[type].push(newItem);
      // Now since the type string is either exp or inc, and our array names are also exp and inc, we can dynamically select the array from our allItems object

      // Now simply return the new item
      return newItem;
    },

    // Delete an item from the data structure
    deleteItem(type, id) {
      // Create a new array based on the type with all the id numbers
      const ids = data.allItems[type].map((current) => current.id);

      // Find the index using indexOf of the id we pass in
      const index = ids.indexOf(id);

      // Delete this item
      // We say if the index is different from -1 because -1 is when it didn't find the element, then delete this element
      if (index !== -1) data.allItems[type].splice(index, 1);
    },

    // Calculate the budget
    calculateBudget() {
      // Calculate total income and expenses
      calculateTotal('exp');
      calculateTotal('inc');

      // Calculate the budget (income - expenses), and store in the budget property
      data.budget = data.totals.inc - data.totals.exp;

      // Calculate the percentage of income that we spent, rounding down
      data.totals.inc > 0 ? data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100) : data.percentage = -1;
    },

    // Calculate the percentages
    calculatePercentages() {
      // For each item in our expense array, calculate the percentage
      data.allItems.exp.forEach((expense) => expense.calculatePercentage(data.totals.inc));
    },

    // Get the percentages
    getPercentages() {
      const allPercentages = data.allItems.exp.map((current) => current.getPercentage());

      // Return rray of all the percentages
      return allPercentages;
    },

    // Return the budget
    getBudget() {
      // We need to return the budget itself, the total incomes and expenses, and the percentages
      return {
        budget: data.budget,
        totalIncome: data.totals.inc,
        totalExpenses: data.totals.exp,
        percentage: data.percentage
      };
    }
  };
})();

// UI Controller
const UIController = (() => {
  // To better handle all of our DOM selections, we will place them in a single variable here
  // If the project should change later, we can simply modify the string, and everything will be updated
  const DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercentageLabel: '.item__percentage',
    dateLabel: '.budget__title--month'
  };

  // Format number strings
  const formatNumber = (num, type) => {
    // Initialize sign variable, used for either + or - that is placed in front of the number
    let sign;

    // Check for type
    type === 'exp' ? (sign = '-') : (sign = '+');

    // Calculate the absolute part of the number
    num = Math.abs(num);

    // Next, take care of the number of decimals
    num = num.toFixed(2);

    // Use regex to convert 10000 to 10,000 and add a $ at the front
    num = `$${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

    // Add sign to the front
    num = `${sign}${num}`;

    // Return num
    return num;
  };

  return {
    // Method to read data from input fields
    getInput() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either 'inc' or 'exp' - is based on value attribute on <option> elements
        description: document.querySelector(DOMstrings.inputDescription).value, // Get input description
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value) // Get input value, and convert to float number so to be able to perform calculations
      };
    },

    // Add list item
    addListItem(obj, type) {
      let html;
      let element;

      // Use template strings to insert HTML with dynamic content
      if (type === 'inc') {
        element = DOMstrings.incomeContainer;

        html = `
          <div class="item clearfix" id="inc-${obj.id}">
            <div class="item__description">${obj.description}</div>
            <div class="right clearfix">
              <div class="item__value">${formatNumber(obj.value, type)}</div>
              <div class="item__delete">
                <button class="item__delete--btn">
                  <i class="ion-ios-close-outline"></i>
                </button>
              </div>
            </div>
          </div>
          `;
      } else if (type === 'exp') {
        element = DOMstrings.expensesContainer;

        html = `
          <div class="item clearfix" id="exp-${obj.id}">
            <div class="item__description">${obj.description}</div>
            <div class="right clearfix">
              <div class="item__value">${formatNumber(obj.value, type)}</div>
              <div class="item__percentage">21%</div>
              <div class="item__delete">
                <button class="item__delete--btn">
                  <i class="ion-ios-close-outline"></i>
                </button>
              </div>
            </div>
          </div>
          `;
      }

      // Insert the HTML into the DOM by dynamically select our list container as well using our element variable
      document.querySelector(element).insertAdjacentHTML('beforeend', html);
    },

    // Delete list item
    deleteListItem(selectorID) {
      // Get the parent
      const element = document.getElementById(selectorID);

      // Remove it
      element.parentNode.removeChild(element);
    },

    // Clear inputs fields
    clearFields() {
      // Grab both the input description and value input fields
      const fields = document.querySelectorAll(`${DOMstrings.inputDescription}, ${DOMstrings.inputValue}`);

      // Loop over the NodeList
      fields.forEach((field) => field.value = '');

      // Set focus back to first element in the array
      fields[0].focus();
    },

    // Display the budget in the UI
    // We need to pass in an object which will contain all 4 pieces (budget, incomes, expenses, percentage) we need to display
    displayBudget(obj) {
      let type;

      obj.budget > 0 ? (type = 'inc') : (type = 'exp');

      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalIncome, 'inc');
      document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExpenses, 'exp');

      // If there should be a percentage (greater than 0), add on a % sign
      // But if it's -1, display something else
      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent = `${obj.percentage}%`;
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = '---';
      }
    },

    // Display the percentages
    displayPercentages(percentages) {
      // Grab all percentage labels
      const fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel);

      // Loop over each, and add a % if the value is greater than 0
      // Else, insert 3 hyphens
      fields.forEach((field, i) => percentages[i] > 0 ? field.textContent = `${percentages[i]}%` : field.textContent = '---' );
    },

    // Display current month and year at the top of the page
    displayMonth() {
      // Get current date
      const now = new Date();

      // Set current year
      const year = now.getFullYear();

      // Array of all months
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      // Get current month (returns number)
      const month = now.getMonth();

      // Input text (select index location from months array based on number from .getMonth())
      document.querySelector(DOMstrings.dateLabel).textContent = `${months[month]} ${year}`;
    },

    // Event handler for when +/- is chosen, change the colour of
    changedType() {
      // Select all inputs, using CSS style combination
      const fields = document.querySelectorAll(`${DOMstrings.inputType},${DOMstrings.inputDescription},${DOMstrings.inputValue}`);

      fields.forEach((field) => field.classList.toggle('red-focus'));

      document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
    },

    // Return our dom strings object
    getDOMstrings() {
      return DOMstrings; // Just need to return this, and now it is public!
    }
  };
})();

// Global App controller
const appController = ((budgetCtrl, UICtrl) => {
  // Load event listeners
  const setupEventListeners = () => {
    // Load in DOM strings from UI controller
    const dom = UICtrl.getDOMstrings();

    // Run ctrlAddItem function when clicking the green check mark button
    document.querySelector(dom.inputBtn).addEventListener('click', ctrlAddItem);

    // Event listener for hitting enter key
    document.addEventListener('keypress', (event) => {
      // Check if keypressed was either enter key. If it was, run ctrlAddItem function
      if (event.keyCode === 13 || event.which === 13) ctrlAddItem();
    });

    // Event delegation event handler for deleting items
    // We will place the event handler on the div element with classes of "container clearfix"
    document.querySelector(dom.container).addEventListener('click', ctrlDeleteItem);

    // Event listener to change border color if income or expense
    document.querySelector(dom.inputType).addEventListener('change', UICtrl.changedType);
  };

  // Update the budget
  const updateBudget = () => {
    // 1) Calculate the budget
    budgetCtrl.calculateBudget();

    // 2) Store the returned budget in this budget variable
    const budget = budgetCtrl.getBudget();

    // 3) Display the budget on the UI
    UICtrl.displayBudget(budget);
  };

  // Update the percentages (the percent each expense has on the total budget)
  const updatePercentages = () => {
    // 1) Calculate the percentages
    budgetCtrl.calculatePercentages();

    // 2) Read them from the budget controller
    const percentages = budgetCtrl.getPercentages();

    // 3) Update the UI with the new percentages
    UICtrl.displayPercentages(percentages);
  };

  let ctrlAddItem = () => {
    // 1) Get input data
    const input = UICtrl.getInput();

    // Check if the input description is not empty string, and check if input value is not NaN, and input value must be greater than 0
    if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
      // 2) Add the item to the budget controller
      const newItem = budgetCtrl.addItem(input.type, input.description, input.value);
      // The addItem receives 3 parameters. the type, description and value
      // The getInput method above gives us these, so we can use the input variable above to retrieve them

      // 3) Add the new item to the UI
      UICtrl.addListItem(newItem, input.type); // Remember, the addListItem method takes in 2 parameters: object, and type (income or expense)

      // 4) Clear the input fields
      UICtrl.clearFields();

      // 5) Calculate and update budget
      updateBudget();

      // 6) Calculate and update the percentages
      updatePercentages();
    }
  };

  let ctrlDeleteItem = (e) => {
    // Get the parent div with an id of either id="income-#" or id="expense-#"
    const itemID = e.target.parentNode.parentNode.parentNode.parentNode.id;

    // Declare some variables (values set below)
    let splitID;
    let type;
    let id;

     // itemID is coerced to true if it exists, false if it does not
    if (itemID) {
      // Create a splitID array based on splitting the itemID string by the -
      splitID = itemID.split('-'); 

      // Get the type (inc or exp)
      type = splitID[0]; 

      // Get the unique id number, but this is a string, so we need to convert it to a number:
      id = parseInt(splitID[1], 10);

      // 1) Delete the item from the data structure
      budgetCtrl.deleteItem(type, id); // Pass in our type and id variables above as agruments to the type and id parameters set in the method

      // 2) Delete the item from the UI
      UICtrl.deleteListItem(itemID);

      // 3) Update and show the new budget
      updateBudget();

      // 4) Calculate and update the percentages
      updatePercentages();
    }
  };

  return {
    // Initializaion function
    init() {
      // Display current month + year
      UICtrl.displayMonth();

      // Display the budget during initialization so to reset all values to 0
      // Remember that display budget takes in an object, so we can pass in an entire object like so:
      UICtrl.displayBudget({
        budget: 0,
        totalIncome: 0,
        totalExpenses: 0,
        percentage: -1
      });
      setupEventListeners();
    }
  };
})(budgetController, UIController);

// Init function call
appController.init();
