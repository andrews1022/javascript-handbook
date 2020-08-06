// ---------- WHAT'S AN API? ----------
// API stands for Application Programming Interface
// APIs can also be found in your PC, OS, smartphone, even some fridges. But we will of course be focusing on web APIs
// It's essentially a contract provided by one piece of software to another
// It usually consists of a structured request and structured response
// We just worked with the Chuck Norris Jokes API that takes a request and responds with the jokes

// ---------- REST API ----------
// REST stands for Representational State Transfer
// It's an architecture style for designing networked applications
// Relies on a stateless, client-server protocol, almost always HTTP
// Treats server objects as resources that can be created, updated, read, and/or destroyed
// An example of this would be a blog post, a user, something usually stored in a database
// What makes REST so great is that since it operates using just HTTP requests, and usually some standard like JSON, it can be used with virtually any programming language. PHP, Ruby, Ruby on Rails, Java, Python, and of course JavaScript
// A simple way of thinking about it is an API is the messenger, and then REST lets us use HTTP requests to format that message
// All APIs have their own rules and structure

// ---------- HTTP REQUESTS ----------
// GET: Retrieve data from a specified resource
// POST: Submit data to be processed by a specified resource
// PUT: Update a specified resource (that's already on the server)
// DELETE: Delete a specified resource (that's already on the server)

// Other:
// HEAD: Same as GET, but does not return a body
// OPTIONS: Returns the supported HTTP Methods
// PATCH: Update partial resources

// ---------- API ENDPOINTS ----------
// When you have some kind of API, whether it's your own or an external one, API you're going to have something called endpoints
// Endpoints are URLS that you access to do certain things
// It is ok for endpoints to be the same. For example:
// https://someurl.com/api/users
// This could be used for both GET and POST
// Since the methods themselves are different, it is ok
// It's important to note that with POST, PUT and DELETE, you're going to send data along with your request because it needs to know the post data to add. It needs to know which posts to update as well as the data that you want to update it with
