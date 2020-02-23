// Budget Controller
var budgetController = (function () {
  // Expense function controller
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  }

  // Add calcuate percentage to expense prototype
  // This way, each object created through the expense constructor will inherit this method
  Expense.prototype.calculatePercentage = function (totalIncome) { // As mentioned below, we need to know the total income
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
  }

  // Get expense percentage
  Expense.prototype.getPercentage = function () {
    return this.percentage;
  }

  // Income function controller
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  // Calculate total incomes or expense, passing in a type parameter to let us decide
  var calculateTotal = function (type) {
    var sum = 0;
    // loop over the array, and add each value to the sum variable
    data.allItems[type].forEach((currentType) => {
      sum += currentType.value;
    });

    // Store the sum inside the totals{} object, in the appropriate key
    data.totals[type] = sum;
  }

  // Data structure which keeps track of all the incomes and expenses, the budget itself, and  percentages
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0, // Total budget amount
    percentage: -1 // Percent of income spent. Set to -1 instead of 0 because -1 is a value we use to say that something is nonexistent. So if there are no budget values or no total expenses/incomes, then there cannot be a percentage
  }

  // Here we will create a public method that will allow other modules to add a new item into our data structure
  return {
    // We need to know the type, the description, and the value
    addItem: function (type, des, val) {
      var newItem;
      var ID;

      // To avoid conflicting IDs numbers, since will be deleting items from the page and this could cause some problems, we will make our ID#s equal to the LAST ID#, plus 1
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1; // Retrieve the last ID, and add 1
      } else {
        ID = 0;
      }
      // The second set of [], [data.allItems[type].length - 1], determines the number/index location of the last item

      // For the type parameter, we know what the UIController has a getInput method which returns the type of the item
      // We also know it is either going to be inc for income, or exp for expense
      // So here, we can check for that
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
    deleteItem: function (type, id) {
      var ids;
      var index;

      // First we need to determine of the type of the item in our data structure: is it an income or an expense?
      // We also need the unique ID#
      // The solution here is to create an array with all of the ID numbers that we have and then find out what the index of our input ID is.
      // Basically, the index of the element that we want to remove.
      // So what we 're gonna do is loop over all of the elements in an incomes or an expenses array.
      ids = data.allItems[type].map((current) => {
        return current.id;
      });

      // Find the index using indexOf of the id we pass in
      index = ids.indexOf(id);

      // Delete this item
      // And remember that the index variable here can be -1 in case that this item here is not found in the array in which we're searching.
      // So we only want to remove something if the index actually exists
      // So we say if the index is different from -1 because -1 is when it didn't find the element.
      if (index !== -1) {
        // Here use the array method splice
        // Splice is used to remove elements
        data.allItems[type].splice(index, 1);
        // Splice takes in two arguments
        // 1) The position number at which we start deleting, which in our case is the index variable
        // 2) The number of elements we want to delete, which in our case is just 1
      }
    },

    // Calculate the budget
    calculateBudget: function () {
      // Calculate total income and expenses
      calculateTotal('exp');
      calculateTotal('inc');

      // Calculate the budget (income - expenses), and store in the budget property
      data.budget = data.totals.inc - data.totals.exp;

      // Calculate the percentage of income that we spent, rounding down
      // Perform this calculation only if we have some incomes entered
      // Otherwise, we try to divide by 0!
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
        // Example: Expense is $100, and income is $200. This means we have spent 50% of our income = 100/200 = 0.5 * 100 = 50
      } else {
        data.percentage = -1;
      }
    },

    // Calculate the percentages
    calculatePercentages: function () {
      // We need to calculate the expense percentage for each of the expense objects that are stored in the expenses array
      /* 
      Example:
      expense a = $20
      expense b = $10
      expense c = $40
      income = $100
      
      How do you calculate the percentage for each for each of these?
      a = 20/100 > 20%
      b = 10/100 > 10%
      c = 40/100 > 40%
      This means we're always going to need the total income
      And so this sounds like there should be a method on each of these expense objects that calculates this percentage (see budget controller)
      */

      // Now for each item in our expense array, calculate the percentage
      data.allItems.exp.forEach((expense) => {
        expense.calculatePercentage(data.totals.inc);
      });
    },

    // Get the percentages
    getPercentages: function () {
      var allPercentages = data.allItems.exp.map((current) => {
        return current.getPercentage();
      });

      // Array of all the percentages
      return allPercentages;
    },

    // Return the budget
    getBudget: function () {
      // We need to return the budget itself, the total incomes and expenses, and the percentages
      return {
        budget: data.budget,
        totalIncome: data.totals.inc,
        totalExpenses: data.totals.exp,
        percentage: data.percentage
      }
    },

    // Testing function for development purposes
    test: function () {
      console.log(data);
    }
  }
})();

// UI Controller
var UIController = (function () {
  // To better handle all of our DOM selections, we will place them in a single variable here
  // If the project should change later, we can simply modify the string, and everything will be updated
  var DOMstrings = {
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
  // Wwhat we're gonna do here is to simply add a method to the UI controller, and then each time that we display a number on the user interface, we call that method, and input the number into that method, and then output the formatted number
  var formatNumber = function (num, type) {
    var numSplit;
    var int;
    var dec;
    var type;
    var sign;

    /* 
    Rules:
    1) Insert a + or a - before the number, depending on the type
    2) Exactly 2 decimal points
    3) Insert a comma for each thousand
    Examples:
    2130.4567 --> + 2,310.46 (we will round up)
    2000 --> + 2,000.00
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
    numSplit = num.split('.');
    int = numSplit[0];
    dec = numSplit[1];

    // Adding the commas
    if (int.length > 3) {
      // We can use a method call substring, shortened to substr
      // Subtring allows us to take part of a string
      // The first argument is the index number of where we want to start
      // The second argument is how many characters we want
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }

    // Execute a ternary expression
    return (type === 'exp' ? sign = '-' : sign = '+') + ' $' + int + '.' + dec;
  }

  return {
    // Method to read data from input fields
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either 'inc' or 'exp' - is based on value attribute on <option> elements
        description: document.querySelector(DOMstrings.inputDescription).value, // Get input description
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value) // Get input value, and convert to float number so to be able to perform calculations
      };
    },

    // Add list item
    addListItem: function (obj, type) {
      var html;
      var newHTML;
      var element;

      // 1) Create an HMTL string with placeholder text
      if (type === 'inc') {
        element = DOMstrings.incomeContainer;

        html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === 'exp') {
        element = DOMstrings.expensesContainer;

        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      }

      // 2) Replace the placeholder text with some actual data, using .replace() method
      newHTML = html.replace('%id%', obj.id);
      newHTML = newHTML.replace('%description%', obj.description); // Override the newHTML because our newHTML contains the first replacement
      newHTML = newHTML.replace('%value%', formatNumber(obj.value, type)); // Override again to get final version

      // 3) Insert the HTML into the DOM
      // Dynamically select our list container as well using our element variable, which is from our DOMstrings object
      document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
    },

    // Delete list item
    deleteListItem: function (selectorID) {
      // First get the parent
      var element = document.getElementById(selectorID);
      element.parentNode.removeChild(element);
    },

    // Clear inputs fields
    clearFields: function () {
      var fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
      // This returns something similiar to an array, but actually gives us something called a list
      // So, we need to convert this list to an array so that we can use all the nifty array methods we want
      // We can do so like this, using the Array object's prototype
      var fieldsArray = Array.prototype.slice.call(fields);

      // Loop over the array
      fieldsArray.forEach((currentField) => {
        // Set all fields to an empty string
        currentField.value = "";
      });

      // Set focus back to first element in the array
      fieldsArray[0].focus();
    },

    // Display the budget in the UI
    // We need to pass in an object which will contain all 4 pieces (budget, incomes, expenses, percentage) we need to display
    displayBudget: function (obj) {
      var type;

      obj.budget > 0 ? type = 'inc' : type = 'exp';

      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalIncome, 'inc');
      document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExpenses, 'exp');

      // If there should be a percentage (greater than 0), add on a % sign
      // But if it's -1, display something else
      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = '---';
      }
    },

    // Display the percentages
    displayPercentages: function (percentages) { // Pass in the percentage array that we have stored in our app controller
      // var fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel); // This returns a NodeList
      // This is because in the DOM tree, where all of the html elements of our page are stored, each element is called a node and that 's also why the property that we used before for moving up in the DOM was called parentNode.
      // So we need to now loop over all of these elements in our selection, and then change the text content property for all of them
      // Instead of using our slice hack from before, we will create our own custom forEach function that will be able to loop through the NodeList
      // var nodeListForEach = function(list, callback) {
      //   for (var i = 0; i < list.length; i++) {
      //     callback(list[i], i);
      //   }
      // }

      // // Calling the function
      // nodeListForEach(fields, function(current, index) {
      //   if (percentages[index] > 0) {
      //     current.textContent = percentages[index] + '%';
      //   } else {
      //     current.textContent = '---';
      //   }
      // });

      // ----- EXPLANATION OF CUSTOM NODELIST FUNCTION -----
      // When we call our nodeListForEach function, we pass a callback function into it
      // This function is assigned to the callback parameter
      // And so, when we then loop over our list, let's say, 5 times, if there are 5 elements in it, and then in each iteration, the callback function gets called with these arguments here --> (list[i], i), which are exactly the ones that we specified here --> function (current, index)
      // So then, five times, our code that we have here --> // Do some stuff..., is going to be executed and we have then access to the current element and to the current index, because we passed them into the callback in here --> callback(list[i], i)

      // Grab all percentage labels
      var fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel);

      // Loop over each, and add a % if the value is greater than 0
      // Else, insert 3 hyphens
      fields.forEach((field, i) => {
        if (percentages[i] > 0) {
          field.textContent = percentages[i] + '%';
        } else {
          field.textContent = '---';
        }
      });
    },

    // Display current month and year at the top of the page
    displayMonth: function () {
      var now, year, month, months;

      // Get current date
      now = new Date();

      // Set current year
      year = now.getFullYear();

      // Array of all months
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      // Get current month (returns number)
      month = now.getMonth();

      // Input text (select index location from months array based on number from .getMonth())
      document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
    },

    // Event handler for when +/- is chosen, change the colour of
    changedType: function() {
      // Select all inputs, using CSS style combination
      var fields = document.querySelectorAll(DOMstrings.inputType + ',' + DOMstrings.inputDescription + ',' + DOMstrings.inputValue);

      fields.forEach((field) => {
        field.classList.toggle('red-focus');
      });

      document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
    },

    // Return our dom strings object
    getDOMstrings: function () {
      return DOMstrings; // Just need to return this, and now it is public!
    }
  }
})();

// Global App controller
var appController = (function (budgetCtrl, UICtrl) {
  // Load event listeners
  var setupEventListeners = function () {
    // Load in DOM strings from UI controller
    var dom = UICtrl.getDOMstrings();

    // Run ctrlAddItem function when clicking the green check mark button
    document.querySelector(dom.inputBtn).addEventListener('click', ctrlAddItem);

    // Event listener for hitting enter key
    document.addEventListener('keypress', (event) => {
      // Check if keypressed was either enter key
      if (event.keyCode === 13 || event.which === 13) {
        // If it was, run ctrlAddItem function
        ctrlAddItem();
      }
    });

    // Event delegation event handler for deleting items
    // We will place the event handler on the div element with classes of "container clearfix"
    // This is the common element that surrounds both the incomes and expenses
    document.querySelector(dom.container).addEventListener('click', ctrlDeleteItem);

    // Event listener to change border color if income or expense
    document.querySelector(dom.inputType).addEventListener('change', UICtrl.changedType);
  }

  // Update the budget
  var updateBudget = function () {
    // 1) Calculate the budget
    budgetCtrl.calculateBudget();

    // 2) Store the returned budget in this budget variable
    var budget = budgetCtrl.getBudget();

    // 3) Display the budget on the UI
    UICtrl.displayBudget(budget);
  }

  // Update the percentages (the percent each expense has on the total budget)
  var updatePercentages = function () {
    // 1) Calculate the percentages
    budgetCtrl.calculatePercentages();

    // 2) Read them from the budget controller
    var percentages = budgetCtrl.getPercentages();

    // 3) Update the UI with the new percentages
    UICtrl.displayPercentages(percentages);
  }

  var ctrlAddItem = function () {
    // 1) Get input data
    var input = UICtrl.getInput();

    // Check if the input description is not empty string, and check if input value is not NaN, and input value must be greater than 0
    if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
      // 2) Add the item to the budget controller
      var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
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
  }

  var ctrlDeleteItem = function (e) {
    // Get the parent div with an id of either id="income-#" or id="expense-#"
    var itemID = e.target.parentNode.parentNode.parentNode.parentNode.id;

    // Declare some variables (values set below)
    var splitID;
    var type;
    var id;

    if (itemID) { // Coerced to true if it exists, false if it does not
      splitID = itemID.split('-'); // Split returns an array of the pieces of your string spliced by what you declare in the split method
      // For example. var s = 'inc-1'
      // s.split('-')
      // s = ['inc', '1'];
      type = splitID[0]; // Get the type (inc or exp)
      // id = splitID[1]; // Get the unique id number, but this is a string, so we need to convert it to a number:
      id = parseInt(splitID[1]);
      // Now with these isolated, we can being work on the 4 steps below:

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
    init: function () {
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
  }

})(budgetController, UIController);

// Init function call
appController.init();