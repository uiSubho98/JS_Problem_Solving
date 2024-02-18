// Write a JavaScript function to test whether the character at the index provided is upper case.
// Test Data :
// console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
// false

const isUpperCaseAt= (str, exp)=>{
    return str.charAt(exp) === str.charAt(exp).toUpperCase() ? true : false
}

console.log(isUpperCaseAt("Js String Exercise", 0))