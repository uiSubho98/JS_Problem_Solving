// Write a JavaScript function to convert a string into camel case.
// Test Data :
// console.log(camelize("JavaScript is Fun"));
// "JavaScriptIsFun"

const str = "JavaScript is Fun";
const res = str.split(" ").map((e)=> e.charAt(0).toUpperCase() +  e.slice(1)).join("");

console.log(res);