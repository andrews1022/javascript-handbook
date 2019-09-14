// Q1: What does DOM stand for?

// Q2: As you work with the DOM, what variable do you use to represent it in your JavaScript?

// Q3: How would you NOT select an element that looks like: 
<div id="unique" class="selected">Hello!</div>
// A:
document.getElementById('unique');
// B:
document.getElementsByClassName('selected')[0];
// C:
document.querySelectorAll('#unique')[0]
// D:
document.querySelector('selected');

// Q4: What function should be called here to trigger the click event?
document.getElementById('button').___________('click', function(event){
  document.write('You clicked the button?');
})

// Q5: Which of the following is TRUE about callbacks?
// A: A callback is plain JavaScript function passed to some method as an argument or option
// B: All callbacks are just event handlers, called to give the user a chance to react when a certain state is triggered
// C: Callbacks have to be annonymouse functions (functions with no names)
// D: All of the above (except option E)
// E: None of the above

// Q6: Which HTTP response code indicates a successful response? 100-, 200-, 300-, 400-, or 500-level?

// Q7: When using JSON, values are accessed by...

// Q8: How would you make the following code print: "Joe's Toyota is from 2005"?
var car = {
  brand: "Toyota",
  year: 2005
};
function printCar(owner){
  console.log(owner + "'s " + this.brand + " is from " + this.year);
}

// Q9: True or false - a promise that has not resolved returns a 100-level response.

// Q10: How would you access the value 'foo' from the code block below?
var x = {
  "Link": [
    [
      "url1",
      {
        "rel": "next"
      }
    ],
    [
      "url2",
      {
        "rel": "foo",
        "bar": "baz"
      }
    ]
  ]
}