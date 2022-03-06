// What are the defer and async attributes on a script tag do/used for?

// If neither are present, the script is downloaded and executed asynchronously, and will halt parsing of the document until it has finished executing.bg-dark
// Both attributes can only be used if there is a src attribute as well

// DEFER: this attribute downloads the script while document is still parsing, but waits until the document has finished parsing before executing it

// ASYNC: this attribute downloads the script during parsing of the document, but will pause the parser to execute the script before it has fully finished parsing
