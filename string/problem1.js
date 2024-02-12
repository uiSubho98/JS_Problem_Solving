// Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data :
// console.log(is_string('Hello world'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

const testStr = "Hello World";

const is_string = (str) => {
  return isNaN(str);
};

console.log(is_string(testStr) )