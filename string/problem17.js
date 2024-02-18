// Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
// Test Data :
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// "quick brown fox jumps over the lazy dog"

const remove_first_occurrence = (inputString, searchString) => {
    return inputString.replace(new RegExp(searchString, 'i'), '');
  };
  
  console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
  // Output: "The quick brown fox jumps over lazy dog"
  