// 7. Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

const testStr = "Subhojit Dutta from India."

const string_parameterize = (str) => {
    return str.toLowerCase().replace(/\s/g, "-")
}

console.log(string_parameterize(testStr));