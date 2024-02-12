// Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

const testStr = "Javascript is fun";

const string_to_array = (str) => {
  return str.length > 0 ? str.split(" ") : "Please provide a valid string";
};

console.log(string_to_array(testStr));
