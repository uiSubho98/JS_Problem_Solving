// . Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

const testStr = "Hello"

const truncate_string = (str,num) => {
    return str.slice(0,num)
}

console.log(truncate_string(testStr,4));