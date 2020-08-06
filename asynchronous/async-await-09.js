// Async/Await was designed for us to consume promises, and not to produce them

// So we can use the Promises made from the previous lecture:
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Calling the resolve function - to mark it as fullfilled
    // The resolve function takes in a parameter, which is the result of the promise
    // This is how we return our result from the promise if it was successful
    // So we return our array of recipe IDS
    resolve([523, 883, 432, 974]);
    // We won't run the reject function here, as this simply a setTime function, so there is no way it can fail
    // But if you're calling data from a server where all kinds of erros can occur, use it then
  }, 1500);
});

const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (id) => {
        const recipe = { title: 'Fresh tomato pasta', publisher: 'Andrew' };
        resolve(`Recipe ID: ${id}. Reciple title: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};

const getRelated = (publisher) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (publisher) => {
        const recipe = { title: 'Italian pizza', publisher: 'Andrew' };
        resolve(`${publisher}: ${recipe.title}`);
      },
      1500,
      publisher
    );
  });
};

// But here we will use async/await to consume them instead of chaining .thens
// You use an async function like so:
async function getRecipesAW() {
  const IDS = await getIDs;
  console.log(IDS);

  const recipe = await getRecipe(IDS[2]);
  console.log(recipe);

  const related = await getRelated('Andrew');
  console.log(related);

  // If we want to return the recipe value...
  return recipe;
}
// getRecipesAW();

// ...we need to use .then()
getRecipesAW().then((result) => console.log(result));

// BREAKDOWN:
// We start off with the getRecipesAW() function call
// Then it keeps running in the background asynchronously
// Inside the function body, we wait for the Promise to resolve
// Assign the values of the Promise to the IDS variable, and then simply log it to the console

// NOTE: The await keyword can ONLY be used inside an async function
