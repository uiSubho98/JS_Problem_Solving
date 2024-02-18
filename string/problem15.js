//  Write a JavaScript function to truncate a string to a certain number of words.
// Test Data :
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
// Output :
// "The quick brown fox"

const truncate = (str, expr) => {
  return str.split(" ").slice(0,expr).join(" ");
};
console.log(truncate("The quick brown fox jumps over the lazy dog",4));
