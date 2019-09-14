// ------------------------------ PART 6 ------------------------------

// Add a try catch block to the #2 solution in order to catch any errors.
// Now change one of the urls so you console.log and error message
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(urls.map(async function (url) {
      const response = await fetch(url);
      return response.json();
    }));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
  } catch (error) {
    console.log('Oopies! That did not work.', error);
  }
}