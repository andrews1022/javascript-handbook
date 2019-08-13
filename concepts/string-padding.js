// -------------------------------------- STRING PADDING --------------------------------------
// ES8 introduced 2 string padding methods
.padStart();
.padEnd();

// For example:
'Turtle'.padStart(10);
"    Turtle"
// We get 10 "total" characters/spaces used including the string

'Turtle'.padEnd(10);
"Turtle    "