// Write a JavaScript function to alphabetize a given string.
// Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
// Test Data :
// console.log(alphabetize_string('Subhojit Dutta'));
// Output :
// "abdhijostttuu"


const alphabetize_string = (str) =>{
return str.toLowerCase().split("").sort().join("")
}

console.log(alphabetize_string("Subhojit Dutta"))