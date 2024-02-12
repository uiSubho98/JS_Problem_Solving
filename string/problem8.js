// Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

const testString = "js string exercises"

console.log(testString[0].toUpperCase() + testString.slice(1, testString.length));