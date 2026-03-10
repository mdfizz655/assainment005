1. What is the difference between var, let, and const?
Answer: var vs let vs const
var: Function-scoped. Can be redeclared and updated. (The "old" way).
let: Block-scoped. Can be updated but not redeclared in the same scope.
const: Block-scoped. Cannot be updated or redeclared (fixed value).

 2. What is the spread operator (...)?

Ans: Spread Operator (...)
Used to "unpack" elements. It expands an array or object into individual parts.
Use case: Cloning arrays or merging multiple objects into one.

3.What is the difference between map(), filter(), and forEach()?
Ans: map() vs filter() vs forEach()
forEach(): Just loops through the array. Returns nothing.
map(): Transforms every item and returns a new array of the same length.
filter(): Picks items that meet a condition and returns a new, shorter array.

4. What is an arrow function?

Ans: Arrow Function
A shorter way to write functions using the => syntax.
Key difference: It doesn't have its own this binding; it inherits it from the parent scope.

5. What are template literals?

 Template Literals
Strings wrapped in backticks (`) instead of quotes.
They allow you to insert variables directly using ${variable} and support multi-line text without extra formatting.
