// Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

const testStr = " ";

const is_Blank = (str) => {
  return str.trim() === "" ? true : false;
};
console.log(is_Blank(testStr));