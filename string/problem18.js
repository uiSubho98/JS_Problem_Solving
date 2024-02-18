// Write a JavaScript function that checks whether a string ends with a specified suffix.
// Test Data :
// console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
// true
// console.log(string_endsWith('JS PHP PYTHON',''));
// false

const string_endsWith = (str, exp) => {
  const word = str.toLowerCase().split(" ").pop();
  return word === exp.toLowerCase() ? true : false;
};

console.log(string_endsWith("JS PHP PYTHON","PYTHON"));
