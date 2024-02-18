// Write a JavaScript function that receives a string and determines whether or not it can be rearranged to become a palindrome.
// When a word, phrase, or sequence can be read both forward and backward, it is considered a palindrome.
//  e.g., madam or nurses run.

const str = "madam";

console.log(
  str.toLowerCase().split("").reverse().join("") === str.toLowerCase()
    ? true
    : false
);
