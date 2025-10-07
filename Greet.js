// Simple function
function greet(name) {
  return "Hello, " + name + "!";
}

let greeting = greet("Bob");
console.log(greeting); // Output: Hello, Bob!

// Anonymous function (assigned to a variable)
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(5, 3)); // Output: 15
